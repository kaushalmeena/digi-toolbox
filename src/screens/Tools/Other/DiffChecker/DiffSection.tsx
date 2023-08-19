import { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import MiddleContainer from "@/components/MiddleContainer";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { loadFile } from "@/utils";
import { Change } from "diff";
import { ChangeEvent, useRef, useState } from "react";
import OutputSection from "./OutputSection";
import { getLeftAndRightOutput } from "./utils";
import { OverlayToaster } from "@blueprintjs/core";
import { ToastMessages } from "@/constants/toast";

export default function DiffSection() {
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [leftOutput, setLeftOutput] = useState<Change[]>([]);
  const [rightOutput, setRightOutput] = useState<Change[]>([]);
  const toasterRef = useRef<OverlayToaster>(null);

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
        toasterRef.current?.show({
          message: ToastMessages.FILE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleRightInputUpload = () => {
    loadFile()
      .then((value) => changeRightInput(value))
      .catch(() => {
        toasterRef.current?.show({
          message: ToastMessages.FILE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const leftInputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: "refresh",
      onClick: handleLeftInputClear
    },
    {
      title: "Upload",
      icon: "export",
      onClick: handleLeftInputUpload
    }
  ];

  const rightInputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: "refresh",
      onClick: handleRightInputClear
    },
    {
      title: "Upload",
      icon: "export",
      onClick: handleRightInputUpload
    }
  ];

  return (
    <>
      <ConvertContainer>
        <TextAreaIOSection
          buttons={leftInputButtons}
          value={leftInput}
          handleValueChange={handleLeftInputChange}
        />
        <MiddleContainer />
        <TextAreaIOSection
          buttons={rightInputButtons}
          value={rightInput}
          handleValueChange={handleRightInputChange}
        />
      </ConvertContainer>
      {!!leftOutput?.length && !!rightOutput?.length && (
        <ConvertContainer>
          <OutputSection output={leftOutput} />
          <MiddleContainer />
          <OutputSection output={rightOutput} />
        </ConvertContainer>
      )}
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
