import React, { ChangeEvent, useState } from "react";
import IOSection from "./IOSection";
import { ButtonOption } from "../ButtonSection";
import { copyText, loadFile, saveFile } from "@/utils";
import ConvertContainer from "../ConvertContainer";
import MiddleContainer from "../MiddleContainer";
import SwitchSection from "./SwitchSection";
import Toast from "../Toast";

type ConvertSectionProps = {
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
};

export default function ConvertSection({
  fileExtension,
  fileType,
  switchURL,
  convertFunction
}: ConvertSectionProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setInput(value);
    setOutput(getOutput(value));
  };

  const handleInputClear = () => {
    setInput("");
    setOutput("");
  };

  const handleInputUpload = () => {
    loadFile()
      .then((value) => {
        setInput(value);
        setOutput(getOutput(value));
      })
      .catch(() => {
        Toast.show({
          message: "Unable to upload file.",
          intent: "danger"
        });
      });
  };

  const handleOutputCopy = () => {
    copyText(output).then(() =>
      Toast.show({ message: "Copied to clipboard.", intent: "primary" })
    );
  };

  const handleOutputDownload = () => {
    saveFile(output, fileExtension, fileType);
  };

  const getOutput = (value: string): string => {
    let output = "";
    try {
      output = convertFunction(value);
    } catch (err) {
      output = String(err) ?? "Invalid input detected";
    }
    return output;
  };

  const inputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: "refresh",
      onClick: handleInputClear
    },
    {
      title: "Upload",
      icon: "export",
      onClick: handleInputUpload
    }
  ];

  const outputButtons: ButtonOption[] = [
    {
      title: "Copy",
      icon: "duplicate",
      onClick: handleOutputCopy
    },
    {
      title: "Download",
      icon: "import",
      onClick: handleOutputDownload
    }
  ];

  return (
    <ConvertContainer>
      <IOSection
        buttons={inputButtons}
        value={input}
        handleValueChange={handleInputChange}
      />
      <MiddleContainer>
        {switchURL && <SwitchSection switchURL={switchURL} />}
      </MiddleContainer>
      <IOSection buttons={outputButtons} value={output} />
    </ConvertContainer>
  );
}
