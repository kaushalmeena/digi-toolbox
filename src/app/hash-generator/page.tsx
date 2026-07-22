import type { Metadata } from "next";
import HashGeneratorPage from "@/screens/Tools/Text/HashGenerator";

export const metadata: Metadata = {
  title: "Hash Generator",
  description:
    "Simple, free and easy to use online tool that generates SHA-1, SHA-256, SHA-384 and SHA-512 hashes of any text."
};

export default function HashGenerator() {
  return <HashGeneratorPage />;
}
