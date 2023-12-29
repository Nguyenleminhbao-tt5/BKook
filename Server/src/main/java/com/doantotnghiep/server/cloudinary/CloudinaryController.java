package com.doantotnghiep.server.cloudinary;

import com.doantotnghiep.server.cloudinary.dto.FileUpload;
import com.doantotnghiep.server.exception.ResponseException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
public class CloudinaryController {
    private final CloudinaryService cloudinaryService;

    @PostMapping("")
    public ResponseEntity<String> uploadImage(@Valid @RequestBody FileUpload request) throws ResponseException, IOException {
        return ResponseEntity.ok(cloudinaryService.uploadFile(request.getImage()));
    }
}
