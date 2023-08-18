import JSONToYAMLPage from "@/screens/Tools/JSON/JSONToYAML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert JSON to YAML - GetThatTool",
  description: "Simple, free and easy to use online tool that converts JSON to YAML."
};

export default function JSONToYAML() {
  return <JSONToYAMLPage/>;
}
