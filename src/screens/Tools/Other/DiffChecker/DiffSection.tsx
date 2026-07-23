import { ExportIcon, RefreshIcon } from "@blueprintjs/icons";
import type { Change } from "diff";
import { type ChangeEvent, useState } from "react";
import type { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import MiddleContainer from "@/components/MiddleContainer";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { ToastMessages } from "@/constants/toast";
import { appToaster } from "@/lib/toaster";
import { loadFile } from "@/utils/fileUtils";
import OutputSection from "./OutputSection";
import { getLeftAndRightOutput } from "./utils";

export default function DiffSection() {
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [leftOutput, setLeftOutput] = useState<Change[]>([]);
  const [rightOutput, setRightOutput] = useState<Change[]>([]);

  const changeLeftInput = (value: string) => {
    const [leftOutput, rightOutput] = getLeftAndRightOutput(value, rightInput);
    setLeftInput(value);
    setLeftOutput(leftOutput);
    setRightOutput(rightOutput);
  };

  const changeRightInput = (value: string) => {
    const [leftOutput, rightOutput] = getLeftAndRightOutput(leftInput, value);
    setRightInput(value);
    setLeftOutput(leftOutput);
    setRightOutput(rightOutput);
  };

  const handleLeftInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    changeLeftInput(event.target.value);
  };

  const handleRightInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    changeRightInput(event.target.value);
  };

  const handleLeftInputClear = () => {
    setLeftInput("");
    setLeftOutput([]);
    setRightOutput([]);
  };

  const handleRightInputClear = () => {
    setRightInput("");
    setLeftOutput([]);
    setRightOutput([]);
  };

  const handleLeftInputUpload = () => {
    loadFile()
      .then((value) => changeLeftInput(value))
      .catch(() => {
        appToaster.show({
          message: ToastMessages.FILE_UPLOAD_FAIL,
          intent: "danger"
        });
      });
  };

  const handleRightInputUpload = () => {
    loadFile()
      .then((value) => changeRightInput(value))
      .catch(() => {
        appToaster.show({
          message: ToastMessages.FILE_UPLOAD_FAIL,
          intent: "danger"
        });
      });
  };

  const leftInputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: <RefreshIcon />,
      onClick: handleLeftInputClear
    },
    {
      title: "Upload",
      icon: <ExportIcon />,
      onClick: handleLeftInputUpload
    }
  ];

  const rightInputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: <RefreshIcon />,
      onClick: handleRightInputClear
    },
    {
      title: "Upload",
      icon: <ExportIcon />,
      onClick: handleRightInputUpload
    }
  ];

  return (
    <>
      <ConvertContainer>
        <TextAreaIOSection
          buttons={leftInputButtons}
          value={leftInput}
          onValueChange={handleLeftInputChange}
        />
        <MiddleContainer />
        <TextAreaIOSection
          buttons={rightInputButtons}
          value={rightInput}
          onValueChange={handleRightInputChange}
        />
      </ConvertContainer>
      {!!leftOutput?.length && !!rightOutput?.length && (
        <ConvertContainer>
          <OutputSection output={leftOutput} />
          <MiddleContainer />
          <OutputSection output={rightOutput} />
        </ConvertContainer>
      )}
    </>
  );
}
