package com.doantotnghiep.server.cloudinary.response;

import lombok.Builder;

import java.util.List;

@Builder
public class UploadResponse {
    public String imageUrl;
    public List<String> ingredients;
}
