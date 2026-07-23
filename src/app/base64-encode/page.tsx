import type { Metadata } from "next";
import Base64EncodePage from "@/screens/Tools/Text/Base64Encode/Base64Encode";

export const metadata: Metadata = {
  title: "Base64-encode Text",
  description:
    "Super simple, free and fast browser-based utility for converting text to base64."
};

export default function Base64Encode() {
  return <Base64EncodePage />;
}
