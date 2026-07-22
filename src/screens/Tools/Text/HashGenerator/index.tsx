"use client";

import { HTMLSelect, OverlayToaster, TextArea } from "@blueprintjs/core";
import { Duplicate } from "@blueprintjs/icons";
import {
  type ChangeEvent,
  type DragEvent,
  useEffect,
  useRef,
  useState
} from "react";
import ButtonSection, { type ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import HeaderSection from "@/components/HeaderSection";
import IOContainer from "@/components/IOContainer";
import { ToastMessages } from "@/constants";
import { copyText, readFileAsText } from "@/utils";
import { generateHash, HashAlgorithms } from "./utils";

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState(HashAlgorithms[1].value);
  const [output, setOutput] = useState("");
  const toasterRef = useRef<OverlayToaster>(null);

  useEffect(() => {
    let active = true;
    if (!input) {
      setOutput("");
      return;
    }
    generateHash(input, algorithm).then((hash) => {
      if (active) {
        setOutput(hash);
      }
    });
    return () => {
      active = false;
    };
  }, [input, algorithm]);

  const handleDrop = async (event: DragEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setInput(await readFileAsText(file));
    }
  };

  const outputButtons: ButtonOption[] = [
    {
      title: "Copy",
      icon: <Duplicate />,
      onClick: () =>
        copyText(output).then(() =>
          toasterRef.current?.show({
            message: ToastMessages.COPY_SUCCESS,
            intent: "primary",
            isCloseButtonShown: false
          })
        )
    }
  ];

  return (
    <>
      <HeaderSection
        heading="Hash Generator"
        subHeading="Quickly generate a SHA hash of any text"
      />
      <ConvertContainer>
        <IOContainer>
          <TextArea
            className="font-mono"
            fill
            rows={16}
            value={input}
            placeholder="Enter text to hash..."
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(event.target.value)
            }
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          />
          <div className="mt-5 flex items-center gap-2.5">
            <span>Algorithm</span>
            <HTMLSelect
              options={HashAlgorithms}
              value={algorithm}
              onChange={(event) => setAlgorithm(event.target.value)}
            />
          </div>
        </IOContainer>
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
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
