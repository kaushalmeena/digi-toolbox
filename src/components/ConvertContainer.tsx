import type { ReactNode } from "react";

type ConvertContainerProps = {
  children: ReactNode;
};

export default function ConvertContainer({ children }: ConvertContainerProps) {
  return <div className="flex justify-center max-md:flex-col">{children}</div>;
}
