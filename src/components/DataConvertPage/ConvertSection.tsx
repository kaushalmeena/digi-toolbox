import { ToastMessages } from "@/constants/toast";
import { copyText, loadFile, saveFile } from "@/utils";
import { OverlayToaster } from "@blueprintjs/core";
import { ChangeEvent, useRef, useState } from "react";
import { ButtonOption } from "../ButtonSection";
import ConvertContainer from "../ConvertContainer";
import MiddleContainer from "../MiddleContainer";
import SwitchSection from "../SwitchSection";
import TextAreaIOSection from "../TextAreaIOSection";

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
  const toasterRef = useRef<OverlayToaster>(null);

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
      .then((data) => {
        setInput(data);
        setOutput(getOutput(data));
      })
      .catch(() => {
        toasterRef.current?.show({
          message: ToastMessages.FILE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleOutputCopy = () => {
    copyText(output).then(
      () =>
        toasterRef.current?.show({
          message: ToastMessages.COPY_SUCCESS,
          intent: "primary",
          isCloseButtonShown: false
        })
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
    <>
      <ConvertContainer>
        <TextAreaIOSection
          buttons={inputButtons}
          value={input}
          handleValueChange={handleInputChange}
        />
        <MiddleContainer>
          {switchURL && <SwitchSection switchURL={switchURL} />}
        </MiddleContainer>
        <TextAreaIOSection buttons={outputButtons} value={output} />
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
