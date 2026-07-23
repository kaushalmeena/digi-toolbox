import { DuplicateIcon, ExportIcon, ImportIcon } from "@blueprintjs/icons";
import { useState } from "react";
import type { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import ImageIOSection from "@/components/ImageIOSection";
import MiddleContainer from "@/components/MiddleContainer";
import SwitchSection from "@/components/SwitchSection";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { ToastMessages } from "@/constants/toast";
import { showToast } from "@/lib/toaster";
import { copyText } from "@/utils/copyUtils";
import { loadFile, saveFile } from "@/utils/fileUtils";

export default function ConvertSection() {
  const [output, setOutput] = useState("");

  const handleInputUpload = () => {
    loadFile("image/*", "dataURL")
      .then((data) => setOutput(data))
      .catch(() => {
        showToast({
          message: ToastMessages.IMAGE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleImageError = () => {
    showToast({
      message: ToastMessages.INVALID_IMAGE,
      intent: "danger",
      isCloseButtonShown: false
    });
  };

  const handleOutputCopy = () => {
    copyText(output).then(() =>
      showToast({
        message: ToastMessages.COPY_SUCCESS,
        intent: "primary",
        isCloseButtonShown: false
      })
    );
  };

  const handleOutputDownload = () => {
    saveFile(output);
  };

  const inputButtons: ButtonOption[] = [
    {
      title: "Upload",
      icon: <ExportIcon />,
      onClick: handleInputUpload
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
    <ConvertContainer>
      <ImageIOSection
        buttons={inputButtons}
        value={output}
        onImageError={handleImageError}
      />
      <MiddleContainer>
        <SwitchSection switchURL="/base64-to-image" />
      </MiddleContainer>
      <TextAreaIOSection buttons={outputButtons} value={output} />
    </ConvertContainer>
  );
}
