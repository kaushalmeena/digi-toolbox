import XMLToJSONPage from "@/screens/Tools/XML/XMLToJSON";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert XML to JSON - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts XML to JSON."
};

export default function XMLToJSON() {
  return <XMLToJSONPage />;
}
