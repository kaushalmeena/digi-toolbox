import type { Metadata } from "next";
import ErrorFallback from "@/components/ErrorFallback";

export const metadata: Metadata = {
  title: "Error 400 - GetThatTool"
};

export default function RootNotFound() {
  return (
    <ErrorFallback
      heading="Error 404"
      subHeading="The page you're looking for no longer exists"
    />
  );
}
