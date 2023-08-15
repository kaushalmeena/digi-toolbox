import Base64EncodePage from "@/screens/Tools/Text/Base64Encode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64-encode Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for converting text to base64."
};

export default function Base64Encode() {
  return <Base64EncodePage />;
}
