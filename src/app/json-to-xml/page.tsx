import JSONToXMLPage from "@/screens/Tools/JSON/JSONToXML";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert JSON to XML - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts JSON to XML."
};

export default function JSONToXML() {
  return <JSONToXMLPage />;
}
