import type { Metadata } from "next";
import UUIDGeneratorPage from "@/screens/Tools/Other/UUIDGenerator";

export const metadata: Metadata = {
  title: "UUID Generator - GetThatTool",
  description:
    "Simple, free and easy to use online tool that generates one or more random version 4 UUIDs."
};

export default function UUIDGenerator() {
  return <UUIDGeneratorPage />;
}
