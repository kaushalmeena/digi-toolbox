import XMLToCSVPage from "@/screens/Tools/XML/XMLToCSV";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert XML to CSV - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts XML to CSV."
};

export default function XMLToCSV() {
  return <XMLToCSVPage />;
}
