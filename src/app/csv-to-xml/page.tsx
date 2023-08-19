import CSVToXMLPage from "@/screens/Tools/CSV/CSVToXML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert CSV to XML - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts CSV to XML."
};

export default function CSVToXML() {
  return <CSVToXMLPage />;
}
