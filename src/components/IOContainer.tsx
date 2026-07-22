import type { ReactNode } from "react";

export default function IOContainer({ children }: { children: ReactNode }) {
  return <div className="min-w-75 flex-1 py-5">{children}</div>;
}
