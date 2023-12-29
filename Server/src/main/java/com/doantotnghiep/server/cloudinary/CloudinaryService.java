package com.doantotnghiep.server.cloudinary;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.doantotnghiep.server.exception.ResponseException;
import jakarta.xml.bind.DatatypeConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
@RequiredArgsConstructor
@ControllerAdvice
public class CloudinaryService {
    @Value("${cloudinary.cloud_name}")
    private String cloudName;

    @Value("${cloudinary.api_key}")
    private String apiKey;

    @Value("${cloudinary.api_secret}")
    private String apiSecret;

    public String uploadFile(String base64) throws ResponseException, IOException {
        try {
            Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
                    "cloud_name", cloudName,
                    "api_key", apiKey,
                    "api_secret", apiSecret
            ));
            byte[] imageBytes = DatatypeConverter.parseBase64Binary(base64);
            Map<?, ?> uploadResult = cloudinary.uploader().upload(base64, ObjectUtils.emptyMap());

            String fileUrl = (String) uploadResult.get("secure_url");

            return fileUrl;
        } catch (IOException e) {
            throw new ResponseException(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, 500);
        }
    }
}
