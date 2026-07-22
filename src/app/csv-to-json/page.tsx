import type { Metadata } from "next";
import CSVToJSONPage from "@/screens/Tools/CSV/CSVToJSON";

export const metadata: Metadata = {
  title: "Convert CSV to JSON - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts CSV to JSON."
};

export default function CSVToJSON() {
  return <CSVToJSONPage />;
}
