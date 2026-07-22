import type { Metadata } from "next";
import MinifyXMLPage from "@/screens/Tools/XML/MinifyXML";

export const metadata: Metadata = {
  title: "Minify XML",
  description: "Simple, free and easy to use online tool that minifies XML."
};

export default function MinifyXML() {
  return <MinifyXMLPage />;
}
