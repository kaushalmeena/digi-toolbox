"use client";

import { ArrowLeftRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { IconButton } from "@/components/tool/icon-button";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { OutputActions } from "@/components/tool/tool-actions";
import { seedPersistedInput } from "@/hooks/use-persisted-input";
import { formatBytes } from "@/lib/format";

import { ImageDropZone } from "./drop-zone";

export default function ImageToBase64() {
  const router = useRouter();
  const [dataUrl, setDataUrl] = useState("");

  const handleSwap = () => {
    seedPersistedInput("/base64-to-image", dataUrl);
    router.push("/base64-to-image");
  };

  return (
    <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
      <Pane>
        <PaneHeader title="Image" />
        <PaneBody>
          <ImageDropZone onImage={setDataUrl}>
            {dataUrl ? (
              <img
                src={dataUrl}
                alt="Uploaded preview"
                className="max-h-full max-w-full object-contain"
              />
            ) : undefined}
          </ImageDropZone>
        </PaneBody>
      </Pane>
      <Pane>
        <PaneHeader
          title="Data URL"
          actions={
            <>
              <IconButton
                label="Swap to Base64 to Image"
                disabled={!dataUrl}
                onClick={handleSwap}
              >
                <ArrowLeftRight />
              </IconButton>
              <OutputActions value={dataUrl} filename="image-base64.txt" />
            </>
          }
        />
        <PaneBody>
          <CodeEditor
            label="Base64 data URL"
            value={dataUrl}
            placeholder="The Base64 data URL appears here."
          />
        </PaneBody>
        <PaneFooter>
          {dataUrl && <span>{formatBytes(dataUrl.length)}</span>}
        </PaneFooter>
      </Pane>
    </div>
  );
}
