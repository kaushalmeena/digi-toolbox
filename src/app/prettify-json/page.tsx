import PrettifyJSONPage from "@/screens/Tools/JSON/PrettifyJSON";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prettify JSON - GetThatTool",
  description: "Simple, free and easy to use online tool that prettifies JSON."
};

export default function PrettifyJSON() {
  return <PrettifyJSONPage />;
}
