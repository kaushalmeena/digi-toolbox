import MinifyXMLPage from "@/screens/Tools/XML/MinifyXML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minify XML - GetThatTool",
  description: "Simple, free and easy to use online tool that minifies XML."
};

export default function MinifyXML() {
  return <MinifyXMLPage />;
}
