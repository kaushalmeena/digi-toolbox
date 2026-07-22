import type { Metadata } from "next";
import PrettifyXMLPage from "@/screens/Tools/XML/PrettifyXML";

export const metadata: Metadata = {
  title: "Prettify XML",
  description: "Simple, free and easy to use online tool that prettifies XML."
};

export default function PrettifyXML() {
  return <PrettifyXMLPage />;
}
