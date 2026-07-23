import { Callout, OverlayToaster } from "@blueprintjs/core";
import {
  DuplicateIcon,
  ExportIcon,
  ImportIcon,
  LinkIcon,
  RefreshIcon
} from "@blueprintjs/icons";
import { type ChangeEvent, useMemo, useRef } from "react";
import { MAX_URL_LENGTH } from "@/constants/config";
import { ToastMessages } from "@/constants/toast";
import { usePersistedInput } from "@/hooks/usePersistedInput";
import { copyText } from "@/utils/copyUtils";
import { loadFile, saveFile } from "@/utils/fileUtils";
import type { ButtonOption } from "../ButtonSection";
import ConvertContainer from "../ConvertContainer";
import MiddleContainer from "../MiddleContainer";
import SwitchSection from "../SwitchSection";
import TextAreaIOSection from "../TextAreaIOSection";

export default function ConvertSection({
  fileExtension,
  fileType,
  switchURL,
  convertFunction
}: {
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
}) {
  const { input, setInput, buildShareUrl } = usePersistedInput();
  const toasterRef = useRef<OverlayToaster>(null);

  const { output, error } = useMemo(() => {
    if (!input) {
      return { output: "", error: "" };
    }
    try {
      return { output: convertFunction(input), error: "" };
    } catch (err) {
      return {
        output: "",
        error: err instanceof Error ? err.message : "Invalid input detected."
      };
    }
  }, [input, convertFunction]);

  const notify = (message: string, intent: "primary" | "danger") => {
    toasterRef.current?.show({ message, intent, isCloseButtonShown: false });
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleInputClear = () => {
    setInput("");
  };

  const handleInputUpload = () => {
    loadFile()
      .then((value) => setInput(value))
      .catch(() => notify(ToastMessages.FILE_UPLOAD_FAIL, "danger"));
  };

  const handleShare = () => {
    const url = buildShareUrl();
    if (url.length > MAX_URL_LENGTH) {
      notify(ToastMessages.SHARE_LINK_TOO_LARGE, "danger");
      return;
    }
    copyText(url).then(() =>
      notify(ToastMessages.SHARE_LINK_SUCCESS, "primary")
    );
  };

  const handleOutputCopy = () => {
    copyText(output).then(() => notify(ToastMessages.COPY_SUCCESS, "primary"));
  };

  const handleOutputDownload = () => {
    saveFile(output, fileExtension, fileType);
  };

  const inputButtons: ButtonOption[] = [
    {
      title: "Clear",
      icon: <RefreshIcon />,
      onClick: handleInputClear
    },
    {
      title: "Upload",
      icon: <ExportIcon />,
      onClick: handleInputUpload
    },
    {
      title: "Share",
      icon: <LinkIcon />,
      onClick: handleShare
    }
  ];

  const outputButtons: ButtonOption[] = [
    {
      title: "Copy",
      icon: <DuplicateIcon />,
      onClick: handleOutputCopy
    },
    {
      title: "Download",
      icon: <ImportIcon />,
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
          onFileDrop={setInput}
        />
        <MiddleContainer>
          {!!switchURL && <SwitchSection switchURL={switchURL} />}
        </MiddleContainer>
        <TextAreaIOSection buttons={outputButtons} value={output} />
      </ConvertContainer>
      {!!error && (
        <Callout intent="danger" title="Conversion error" className="mt-2.5">
          {error}
        </Callout>
      )}
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
