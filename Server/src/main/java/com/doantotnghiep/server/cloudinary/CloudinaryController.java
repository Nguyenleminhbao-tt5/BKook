package com.doantotnghiep.server.cloudinary;

import com.doantotnghiep.server.clarifai.Clarifai;
import com.doantotnghiep.server.cloudinary.dto.FileUpload;
import com.doantotnghiep.server.cloudinary.response.UploadResponse;
import com.doantotnghiep.server.exception.ResponseException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
public class CloudinaryController {
    private final CloudinaryService cloudinaryService;
    private final Clarifai clarifaiService;

    @PostMapping("")
    public UploadResponse uploadImage(@Valid @RequestBody FileUpload request) throws ResponseException, IOException {
        try {
            String imageUrl = cloudinaryService.uploadFile(request.getImage());
            List<String> ingredients = clarifaiService.generateIngredient(imageUrl);
            UploadResponse response = UploadResponse.builder()
                    .imageUrl(imageUrl)
                    .ingredients(ingredients)
                    .build();

            return response;
        } catch (ResponseException error) {
            throw new ResponseException(error.getMessage(), error.getStatus(), error.getStatusCode());
        }
    }
}
