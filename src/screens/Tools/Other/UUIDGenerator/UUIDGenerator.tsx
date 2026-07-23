"use client";

import { NumericInput, TextArea } from "@blueprintjs/core";
import { DuplicateIcon, ImportIcon, RefreshIcon } from "@blueprintjs/icons";
import { useEffect, useState } from "react";
import ButtonSection, { type ButtonOption } from "@/components/ButtonSection";
import HeaderSection from "@/components/HeaderSection";
import IOContainer from "@/components/IOContainer";
import { ToastMessages } from "@/constants/toast";
import { appToaster } from "@/lib/toaster";
import { copyText } from "@/utils/copyUtils";
import { saveFile } from "@/utils/fileUtils";
import { generateUUIDs } from "./utils";

export default function UUIDGeneratorPage() {
  const [count, setCount] = useState(5);
  const [output, setOutput] = useState("");

  const generate = (total: number) => {
    setOutput(generateUUIDs(total));
  }

  const notify = (message: string) => {
    appToaster.show({
      message,
      intent: "primary",
    });
  };

  // Generate an initial batch on mount only; `count` is intentionally omitted
  // so changing it doesn't auto-regenerate — the user clicks "Regenerate".
  // biome-ignore lint/correctness/useExhaustiveDependencies: mount-only generation
  useEffect(() => generate(count), []);

  const outputButtons: ButtonOption[] = [
    {
      title: "Regenerate",
      icon: <RefreshIcon />,
      onClick: () => generate(count)
    },
    {
      title: "Copy",
      icon: <DuplicateIcon />,
      onClick: () =>
        copyText(output).then(() => notify(ToastMessages.COPY_SUCCESS))
    },
    {
      title: "Download",
      icon: <ImportIcon />,
      onClick: () => saveFile(output, "txt", "text/plain")
    }
  ];

  return (
    <>
      <HeaderSection
        heading="UUID Generator"
        subHeading="Quickly generate one or more random (v4) UUIDs"
      />
      <div className="mx-auto max-w-180">
        <div className="flex items-center justify-center gap-2.5">
          <span>How many?</span>
          <NumericInput
            min={1}
            max={500}
            value={count}
            onValueChange={(value) => setCount(Number.isNaN(value) ? 1 : value)}
          />
        </div>
        <IOContainer>
          <TextArea
            className="font-mono"
            fill
            rows={16}
            value={output}
            readOnly
          />
          <ButtonSection buttons={outputButtons} />
        </IOContainer>
      </div>
    </>
  );
}
