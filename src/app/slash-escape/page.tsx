import type { Metadata } from "next";
import SlashEscapePage from "@/screens/Tools/Text/SlashEscape/SlashEscape";

export const metadata: Metadata = {
  title: "Slash-escape Text",
  description:
    "Super simple, free and fast browser-based utility for slash-escaping text."
};

export default function SlashEscape() {
  return <SlashEscapePage />;
}
