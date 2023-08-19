import DiffCheckerPage from "@/screens/Tools/Other/DiffChecker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diff-Checker - GetThatTool",
  description: "Super simple, free and fast browser-based utility to compare text to find the difference between two text files."
};

export default function DiffChecker() {
  return <DiffCheckerPage />;
}
