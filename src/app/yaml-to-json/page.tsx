import type { Metadata } from "next";
import YAMLToJSONPage from "@/screens/Tools/YAML/YAMLToJSON";

export const metadata: Metadata = {
  title: "Convert YAML to JSON - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts YAML to JSON."
};

export default function YAMLToJSON() {
  return <YAMLToJSONPage />;
}
