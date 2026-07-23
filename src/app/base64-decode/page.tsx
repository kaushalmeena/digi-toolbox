import type { Metadata } from "next";
import Base64DecodePage from "@/screens/Tools/Text/Base64Decode/Base64Decode";

export const metadata: Metadata = {
  title: "Base64-decode Text",
  description:
    "Super simple, free and fast browser-based utility for converting base64 to text."
};

export default function Base64Decode() {
  return <Base64DecodePage />;
}
