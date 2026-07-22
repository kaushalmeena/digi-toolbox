import type { ReactNode } from "react";

type IOContainerProps = {
  children: ReactNode;
};

export default function IOContainer({ children }: IOContainerProps) {
  return <div className="min-w-75 flex-1 py-5">{children}</div>;
}
