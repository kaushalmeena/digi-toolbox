import type { Metadata } from "next";
import YAMLToXMLPage from "@/screens/Tools/YAML/YAMLToXML";

export const metadata: Metadata = {
  title: "Convert YAML to XML - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts YAML to XML."
};

export default function YAMLToXML() {
  return <YAMLToXMLPage />;
}
