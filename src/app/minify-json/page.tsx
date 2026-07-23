import type { Metadata } from "next";
import MinifyJSONPage from "@/screens/Tools/JSON/MinifyJSON/MinifyJSON";

export const metadata: Metadata = {
  title: "Minify JSON",
  description: "Simple, free and easy to use online tool that minifies JSON."
};

export default function MinifyJSON() {
  return <MinifyJSONPage />;
}
