import XMLToYAMLPage from "@/screens/Tools/XML/XMLToYAML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert XML to YAML - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts XML to YAML."
};

export default function XMLToYAML() {
  return <XMLToYAMLPage />;
}
