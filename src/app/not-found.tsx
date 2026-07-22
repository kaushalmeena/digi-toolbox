import type { Metadata } from "next";
import ErrorPage from "@/components/ErrorPage";

export const metadata: Metadata = {
  title: "Error 400 - GetThatTool"
};

export default function RootNotFound() {
  return (
    <ErrorPage
      heading="Error 404"
      subHeading="The page you're looking for no longer exists"
    />
  );
}
