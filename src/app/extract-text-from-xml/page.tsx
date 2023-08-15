import ExtractTextFromXMLPage from "@/screens/Tools/Text/ExtractTextFromXML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extract Text from XML - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for extracting text from XML."
};

export default function ExtractTextFromXML() {
  return <ExtractTextFromXMLPage />;
}
