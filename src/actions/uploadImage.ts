"use server";
import { cloudinary } from "@/lib/cloudinary";

export const uploadImage = async (file: string) => {
  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(file);
    console.log(result);
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};
