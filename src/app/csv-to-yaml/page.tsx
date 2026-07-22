import type { Metadata } from "next";
import CSVToYAMLPage from "@/screens/Tools/CSV/CSVToYAML";

export const metadata: Metadata = {
  title: "Convert CSV to YAML - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts CSV to YAML."
};

export default function CSVToYAML() {
  return <CSVToYAMLPage />;
}
