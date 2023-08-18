import JSONToCSVPage from "@/screens/Tools/JSON/JSONToCSV";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert JSON to CSV - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts JSON to CSV."
};

export default function JSONToCSV() {
  return <JSONToCSVPage />;
}
