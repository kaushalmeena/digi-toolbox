"use client";

import { NumericInput, OverlayToaster, TextArea } from "@blueprintjs/core";
import { Duplicate, Import, Refresh } from "@blueprintjs/icons";
import { useEffect, useRef, useState } from "react";
import ButtonSection, { type ButtonOption } from "@/components/ButtonSection";
import HeaderSection from "@/components/HeaderSection";
import IOContainer from "@/components/IOContainer";
import { ToastMessages } from "@/constants";
import { copyText, saveFile } from "@/utils";
import { generateUUIDs } from "./utils";

export default function UUIDGeneratorPage() {
  const [count, setCount] = useState(5);
  const [output, setOutput] = useState("");
  const toasterRef = useRef<OverlayToaster>(null);

  const generate = (total: number) => {
    setOutput(generateUUIDs(total));
  };

  // Generate an initial batch on mount only; running on the client avoids a
  // server/client hydration mismatch from differing random values.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional one-time generation on mount
  useEffect(() => {
    generate(count);
  }, []);

  const notify = (message: string) => {
    toasterRef.current?.show({
      message,
      intent: "primary",
      isCloseButtonShown: false
    });
  };

  const outputButtons: ButtonOption[] = [
    {
      title: "Regenerate",
      icon: <Refresh />,
      onClick: () => generate(count)
    },
    {
      title: "Copy",
      icon: <Duplicate />,
      onClick: () =>
        copyText(output).then(() => notify(ToastMessages.COPY_SUCCESS))
    },
    {
      title: "Download",
      icon: <Import />,
      onClick: () => saveFile(output, "txt", "text/plain")
    }
  ];

  return (
    <>
      <HeaderSection
        heading="UUID Generator"
        subHeading="Quickly generate one or more random (v4) UUIDs"
      />
      <div className="mx-auto max-w-[720px]">
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
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
