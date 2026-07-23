"use client";

import { WrenchIcon } from "@blueprintjs/icons";
import { Tools } from "@/constants/tools";
import MainSection from "./MainSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-3 px-5 pt-10 pb-4 text-center">
        <span className="text-primary">
          <WrenchIcon size={48} />
        </span>
        <h1 className="text-4xl font-bold tracking-tight">FindThatTool</h1>
        <p className="max-w-xl text-lg">
          Every common developer tool — JSON, CSV, YAML, XML, Text and more — in
          one fast, free place.
        </p>
        <p className="text-muted-foreground text-sm">
          {Tools.length}+ tools · 100% in your browser · no sign-up
        </p>
      </div>
      <MainSection />
    </>
  );
}
