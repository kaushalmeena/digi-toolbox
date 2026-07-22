import type { Metadata } from "next";
import ImageToBase64Page from "@/screens/Tools/Other/ImageToBase64";

export const metadata: Metadata = {
  title: "Image to Base64",
  description:
    "Super simple, free and fast browser-based utility for converting image to base64 string."
};

export default function ImageToBase64() {
  return <ImageToBase64Page />;
}
