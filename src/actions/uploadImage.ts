"use server";
import { cloudinary } from "@/lib/cloudinary";

export const uploadImage = async (file: string, prevLink?: string) => {
  let public_id = "";
  try {
    //delete the previous image
    if (prevLink) {
      console.log(prevLink);
      public_id = prevLink.split("/").pop()!.split(".")[0];
    }
    // Upload the image
    const result = await cloudinary.uploader.upload(file, {
      folder: "trenlines",
      public_id,
    });
    console.log(result);
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};
