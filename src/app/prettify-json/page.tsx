import type { Metadata } from "next";
import PrettifyJSONPage from "@/screens/Tools/JSON/PrettifyJSON";

export const metadata: Metadata = {
  title: "Prettify JSON - GetThatTool",
  description: "Simple, free and easy to use online tool that prettifies JSON."
};

export default function PrettifyJSON() {
  return <PrettifyJSONPage />;
}
