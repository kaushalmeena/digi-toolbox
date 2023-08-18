import PrettifyXMLPage from "@/screens/Tools/XML/PrettifyXML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prettify XML - GetThatTool",
  description: "Simple, free and easy to use online tool that prettifies XML."
};

export default function PrettifyXML() {
  return <PrettifyXMLPage />;
}
