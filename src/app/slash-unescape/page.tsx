import type { Metadata } from "next";
import SlashUnescapePage from "@/screens/Tools/Text/SlashUnescape/SlashUnescape";

export const metadata: Metadata = {
  title: "Slash-unescape Text",
  description:
    "Super simple, free and fast browser-based utility for slash-unescaping text."
};

export default function SlashUnescape() {
  return <SlashUnescapePage />;
}
