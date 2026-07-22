import type { Metadata } from "next";
import CSVToXMLPage from "@/screens/Tools/CSV/CSVToXML";

export const metadata: Metadata = {
  title: "Convert CSV to XML",
  description:
    "Simple, free and easy to use online tool that converts CSV to XML."
};

export default function CSVToXML() {
  return <CSVToXMLPage />;
}
