package com.doantotnghiep.server.cloudinary;

import com.doantotnghiep.server.cloudinary.dto.FileUpload;
import com.doantotnghiep.server.exception.ResponseException;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/upload")
@RequiredArgsConstructor
public class CloudinaryController {
    private final CloudinaryService cloudinaryService;

    @PostMapping("")
    public String uploadImage(@RequestBody FileUpload request) throws ResponseException, IOException {
        System.out.println(request);
        return cloudinaryService.uploadFile(request.getImage());
    }
}
