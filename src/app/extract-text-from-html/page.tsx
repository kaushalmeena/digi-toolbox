import type { Metadata } from "next";
import ExtractTextFromHTMLPage from "@/screens/Tools/Text/ExtractTextFromHTML";

export const metadata: Metadata = {
  title: "Extract Text from HTML - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for extracting text from HTML."
};

export default function ExtractTextFromHTML() {
  return <ExtractTextFromHTMLPage />;
}
