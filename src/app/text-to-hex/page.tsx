import TextToHexPage from "@/screens/Tools/Text/TextToHex";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Text to Hexadecimal - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for converting text to hexadecimal."
};

export default function TextToHex() {
  return <TextToHexPage />;
}
