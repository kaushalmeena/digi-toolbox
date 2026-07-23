import type { Metadata } from "next";
import ImageColorPickerPage from "@/screens/Tools/Other/ImageColorPicker/ImageColorPicker";

export const metadata: Metadata = {
  title: "Image Color Picker",
  description:
    "Super simple, free and fast browser-based utility for picking color from image."
};

export default function ImageColorPicker() {
  return <ImageColorPickerPage />;
}
