"use client";

import { Download } from "lucide-react";
import { useState } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { IconButton } from "@/components/tool/icon-button";
import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { InputActions } from "@/components/tool/tool-actions";
import { usePersistedInput } from "@/hooks/use-persisted-input";
import { downloadDataUrl } from "@/lib/files";

/** Accepts a full data URL or bare Base64 (assumed PNG). */
function toDataUrl(input: string): string {
  const value = input.trim();
  if (!value || value.startsWith("data:")) {
    return value;
  }
  return `data:image/png;base64,${value.replace(/\s+/g, "")}`;
}

export default function Base64ToImage() {
  const { input, setInput } = usePersistedInput();
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const src = toDataUrl(input);
  const failed = !!src && failedSrc === src;

  const handleDownload = () => downloadDataUrl(src, "image");
  const handleImageError = () => setFailedSrc(src);

  return (
    <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
      <Pane>
        <PaneHeader
          title="Base64"
          actions={<InputActions value={input} onChange={setInput} />}
        />
        <PaneBody>
          <CodeEditor
            label="Base64 or data URL"
            value={input}
            onChange={setInput}
            placeholder="data:image/png;base64,… or raw Base64"
            autoFocus
          />
        </PaneBody>
      </Pane>
      <Pane>
        <PaneHeader
          title="Preview"
          actions={
            <IconButton
              label="Download image"
              disabled={!src || failed}
              onClick={handleDownload}
            >
              <Download />
            </IconButton>
          }
        />
        <PaneBody className="items-center justify-center bg-[repeating-conic-gradient(var(--muted)_0_25%,transparent_0_50%)] bg-size-[16px_16px] p-4">
          {!src && (
            <p className="text-sm text-muted-foreground">
              The image preview appears here.
            </p>
          )}
          {failed && (
            <p className="text-sm text-destructive">
              This isn't a valid Base64 image.
            </p>
          )}
          {src && !failed && (
            <img
              src={src}
              alt="Decoded preview"
              className="max-h-full max-w-full object-contain"
              onError={handleImageError}
            />
          )}
        </PaneBody>
      </Pane>
    </div>
  );
}
