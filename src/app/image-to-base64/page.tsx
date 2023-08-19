import ImageToBase64Page from "@/screens/Tools/Other/ImageToBase64";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to Base64 - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for converting image to base64 string."
};

export default function ImageToBase64() {
  return <ImageToBase64Page />;
}
