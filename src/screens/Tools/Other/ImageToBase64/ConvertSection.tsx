import { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import ImageIOSection from "@/components/ImageIOSection";
import MiddleContainer from "@/components/MiddleContainer";
import SwitchSection from "@/components/SwitchSection";
import TextAreaIOSection from "@/components/TextAreaIOSection";
import { ToastMessages } from "@/constants";
import { copyText, loadFile, saveFile } from "@/utils";
import { OverlayToaster } from "@blueprintjs/core";
import { useRef, useState } from "react";

export default function ConvertSection() {
  const [output, setOutput] = useState("");
  const toasterRef = useRef<OverlayToaster>(null);

  const handleInputUpload = () => {
    loadFile("image/*", "dataURL")
      .then((data) => setOutput(data))
      .catch(() => {
        toasterRef.current?.show({
          message: ToastMessages.IMAGE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleImageError = () => {
    toasterRef.current?.show({
      message: ToastMessages.INVALID_IMAGE,
      intent: "danger",
      isCloseButtonShown: false
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
    saveFile(output);
  };

  const inputButtons: ButtonOption[] = [
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
        <ImageIOSection
          buttons={inputButtons}
          value={output}
          handleImageError={handleImageError}
        />
        <MiddleContainer>
          <SwitchSection switchURL="/base64-to-image" />
        </MiddleContainer>
        <TextAreaIOSection buttons={outputButtons} value={output} />
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
