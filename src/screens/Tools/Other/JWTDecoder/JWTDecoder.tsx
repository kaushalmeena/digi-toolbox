"use client";

import DataConvertPage from "@/components/DataConvertPage/DataConvertPage";
import { decodeJWT } from "./utils";

export default function JWTDecoderPage() {
  return (
    <DataConvertPage
      heading="JWT Decoder"
      subHeading="Quickly decode a JSON Web Token's header and payload"
      fileExtension="json"
      fileType="application/json"
      convertFunction={decodeJWT}
    />
  );
}
