import MinifyJSONPage from "@/screens/Tools/JSON/MinifyJSON";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minify JSON - GetThatTool",
  description: "Simple, free and easy to use online tool that minifies JSON."
};

export default function MinifyJSON() {
  return <MinifyJSONPage />;
}
