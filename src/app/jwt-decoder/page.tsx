import type { Metadata } from "next";
import JWTDecoderPage from "@/screens/Tools/Other/JWTDecoder";

export const metadata: Metadata = {
  title: "JWT Decoder - GetThatTool",
  description:
    "Simple, free and easy to use online tool that decodes a JSON Web Token (JWT) into its header and payload."
};

export default function JWTDecoder() {
  return <JWTDecoderPage />;
}
