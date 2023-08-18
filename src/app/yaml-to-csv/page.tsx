import YAMLToCSVPage from "@/screens/Tools/YAML/YAMLToCSV";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert YAML to CSV - GetThatTool",
  description: "Simple, free and easy to use online tool that converts YAML to CSV."
};

export default function YAMLToCSV() {
  return <YAMLToCSVPage />;
}
