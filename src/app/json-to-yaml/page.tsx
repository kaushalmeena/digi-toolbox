import type { Metadata } from "next";
import JSONToYAMLPage from "@/screens/Tools/JSON/JSONToYAML/JSONToYAML";

export const metadata: Metadata = {
  title: "Convert JSON to YAML",
  description:
    "Simple, free and easy to use online tool that converts JSON to YAML."
};

export default function JSONToYAML() {
  return <JSONToYAMLPage />;
}
