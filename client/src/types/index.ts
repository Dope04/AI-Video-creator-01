import type React from "react";

export interface UploadZoneProps {
    label: string;
    file: File | null;
    onClear: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface user {
    id?: string;
    name?: string;
    email?: string;
}
export interface Project {
    id: string;
    name?: string;
    userId?: string;
    username?: user; 
    productName: string;
    productDescription?: string;
    userPrompt?: string;
    aspectRatio: string;
    targetLength: number;
    generatedVideo?: string;
    generatedImage?: string;
    isGenerating: boolean;
    isPublished: boolean;
    error?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    uploadedImage?: string[];
}