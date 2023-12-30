
package com.doantotnghiep.server.clarifai;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;
import com.doantotnghiep.server.exception.ResponseException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@ControllerAdvice
public class Clarifai {
    static final String PAT = "494692dadd9943dfa2d57a7a11e96315";

    static final String USER_ID = "clarifai";
    static final String APP_ID = "main";
    // Change these to whatever model and image URL you want to use
    static final String MODEL_ID = "food-item-recognition";
    static final String MODEL_VERSION_ID = "1d5fd481e0cf4826aa72ec3ff049e044";


    public List<String> generateIngredient(String imageUrl) throws ResponseException {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(
                PostModelOutputsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .setVersionId(MODEL_VERSION_ID)  // This is optional. Defaults to the latest model version.
                        .addInputs(
                                Input.newBuilder().setData(
                                        Data.newBuilder().setImage(
                                                Image.newBuilder().setUrl(imageUrl)
                                        )
                                )
                        )
                        .build()
        );

        if (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new ResponseException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus(), HttpStatus.BAD_REQUEST, 400);
        }

        Output output = postModelOutputsResponse.getOutputs(0);
        List<String> result = new ArrayList<>();
        for (Concept concept : output.getData().getConceptsList()) {
            if (concept.getValue() > 0) {
                result.add(concept.getName());
            }
        }

        return result;

    }

}