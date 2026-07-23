import { ExportIcon, ImportIcon, RefreshIcon } from "@blueprintjs/icons";
import { type ChangeEvent, useState } from "react";
import type { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import ImageIOSection from "@/components/ImageIOSection";
import MiddleContainer from "@/components/MiddleContainer";
import SwitchSection from "@/components/SwitchSection";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { ToastMessages } from "@/constants/toast";
import { appToaster } from "@/lib/toaster";
import { loadFile, saveImage } from "@/utils/fileUtils";

export default function ConvertSection() {
  const [input, setInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleInputClear = () => {
    setInput("");
  };

  const handleInputUpload = () => {
    loadFile()
      .then((data) => setInput(data))
      .catch(() => {
        appToaster.show({
          message: ToastMessages.IMAGE_UPLOAD_FAIL,
          intent: "danger"
        });
      });
  };

  const handleImageError = () => {
    appToaster.show({
      message: ToastMessages.INVALID_IMAGE,
      intent: "danger"
    });
  };

  const handleOutputDownload = () => {
    saveImage(input);
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
    }
  ];

  const outputButtons: ButtonOption[] = [
    {
      title: "Download",
      icon: <ImportIcon />,
      onClick: handleOutputDownload
    }
  ];

  return (
    <ConvertContainer>
      <TextAreaIOSection
        buttons={inputButtons}
        value={input}
        onValueChange={handleInputChange}
      />
      <MiddleContainer>
        <SwitchSection switchURL="/image-to-base64" />
      </MiddleContainer>
      <ImageIOSection
        buttons={outputButtons}
        value={input}
        onImageError={handleImageError}
      />
    </ConvertContainer>
  );
}
