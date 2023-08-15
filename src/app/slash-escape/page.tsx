import SlashEscapePage from "@/screens/Tools/Text/SlashEscape";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slash-escape Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for slash-escaping text."
};

export default function SlashEscape() {
  return <SlashEscapePage />;
}
