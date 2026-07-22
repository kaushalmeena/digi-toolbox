import type { ReactNode } from "react";

export default function ConvertContainer({
  children
}: {
  children: ReactNode;
}) {
  return <div className="flex justify-center max-md:flex-col">{children}</div>;
}
