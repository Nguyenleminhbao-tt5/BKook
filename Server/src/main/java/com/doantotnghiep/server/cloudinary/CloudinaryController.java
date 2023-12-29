package com.doantotnghiep.server.cloudinary;

import com.doantotnghiep.server.clarifai.Clarifai;
import com.doantotnghiep.server.cloudinary.dto.FileUpload;
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
    public List<String> uploadImage(@Valid @RequestBody FileUpload request) throws ResponseException, IOException {
        String imageUrl = cloudinaryService.uploadFile(request.getImage());
        return clarifaiService.generateIngredient(imageUrl);
    }
}
