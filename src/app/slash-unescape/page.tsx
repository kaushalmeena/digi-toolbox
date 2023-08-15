import SlashUnescapePage from "@/screens/Tools/Text/SlashUnescape";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slash-unescape Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for slash-unescaping text."
};

export default function SlashUnescape() {
  return <SlashUnescapePage />;
}
