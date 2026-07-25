"use client";

import { Tag } from "@blueprintjs/core";
import {
  AirplaneIcon,
  BanCircleIcon,
  DesktopIcon,
  WrenchIcon
} from "@blueprintjs/icons";
import ToolboxIcon from "@/components/ToolboxIcon";
import { Tools } from "@/constants/tools";
import MainSection from "./MainSection";

// Selling points, as chips rather than a "·"-separated line so each one is
// scannable. `Tag minimal round` matches the count tags in MainSection.
const HIGHLIGHTS = [
  { icon: <WrenchIcon />, label: `${Tools.length}+ tools` },
  { icon: <DesktopIcon />, label: "100% in your browser" },
  // Airplane, not OfflineIcon — the latter is a bolt glyph that reads as "fast".
  { icon: <AirplaneIcon />, label: "Works offline" },
  { icon: <BanCircleIcon />, label: "No sign-up" }
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-1 px-5 pt-12 pb-6 text-center">
        <ToolboxIcon size={60} />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Digi-Toolbox
        </h1>
        {/* Muted so the wordmark above stays the clear focal point. */}
        <p className="text-muted-foreground max-w-xl text-lg">
          Every common developer tool — JSON, CSV, YAML, XML, Text and more — in
          one fast, free place.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {HIGHLIGHTS.map((item) => (
            <Tag key={item.label} size="large" minimal round icon={item.icon}>
              {item.label}
            </Tag>
          ))}
        </div>
      </div>
      <MainSection />
    </>
  );
}
