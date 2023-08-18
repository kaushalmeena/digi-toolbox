import Base64ToImagePage from "@/screens/Tools/Other/Base64ToImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 to Image - GetThatTool",
  description: "Super simple, free and fast browser-based utility for converting base64 string to image."
};

export default function Base64ToImage() {
  return <Base64ToImagePage />;
}
