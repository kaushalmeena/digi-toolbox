import type { ReactNode } from "react";

export default function MiddleContainer({
  children
}: {
  children?: ReactNode;
}) {
  return (
    <div className="flex min-w-20 items-center justify-center pt-5 pr-5 pb-17.5 pl-5 max-md:w-full max-md:px-0 max-md:py-2.5">
      {children}
    </div>
  );
}
