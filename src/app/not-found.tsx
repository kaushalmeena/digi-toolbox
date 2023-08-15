import ErrorPage from "@/components/ErrorPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error 400 - GetThatTool"
};

export default function Custom404() {
  return (
    <ErrorPage
      heading="Error 404"
      subHeading="The page you're looking for no longer exists"
    />
  );
}
