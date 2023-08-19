import ImageColorPickerPage from "@/screens/Tools/Other/ImageColorPicker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Color Picker - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for picking color from image."
};

export default function ImageColorPicker() {
  return <ImageColorPickerPage />;
}
