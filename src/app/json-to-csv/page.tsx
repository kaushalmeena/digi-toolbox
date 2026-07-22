import type { Metadata } from "next";
import JSONToCSVPage from "@/screens/Tools/JSON/JSONToCSV";

export const metadata: Metadata = {
  title: "Convert JSON to CSV",
  description:
    "Simple, free and easy to use online tool that converts JSON to CSV."
};

export default function JSONToCSV() {
  return <JSONToCSVPage />;
}
