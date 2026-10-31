"use client";

import {
  ClipboardPaste,
  Copy,
  Download,
  Eraser,
  FileUp,
  Link2,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

import { copyToClipboard, readClipboard } from "@/lib/clipboard";
import { downloadText, pickFile } from "@/lib/files";

import { IconButton } from "./icon-button";

/**
 * The standard input-pane actions (paste, open, sample, share, clear) wired to
 * a string setter, so every tool's input behaves the same way.
 */
export function InputActions({
  value,
  onChange,
  sample,
  accept,
  buildShareUrl
}: {
  value: string;
  onChange: (value: string) => void;
  sample?: string;
  accept?: string;
  buildShareUrl?: () => string | null;
}) {
  const paste = async () => {
    const text = await readClipboard();
    if (text !== null) {
      onChange(text);
    }
  };

  const open = () => {
    pickFile(accept)
      .then(onChange)
      .catch(() => {
        // Cancelling the picker isn't an error worth reporting.
      });
  };

  const loadSample = () => onChange(sample ?? "");

  const clear = () => onChange("");

  const share = () => {
    const url = buildShareUrl?.();
    if (!url) {
      toast.error("Input is too large to share as a link");
      return;
    }
    copyToClipboard(url, "Share link copied");
  };

  return (
    <>
      <IconButton label="Paste" onClick={paste}>
        <ClipboardPaste />
      </IconButton>
      <IconButton label="Open file" onClick={open}>
        <FileUp />
      </IconButton>
      {sample !== undefined && (
        <IconButton label="Load sample" onClick={loadSample}>
          <Sparkles />
        </IconButton>
      )}
      {buildShareUrl && (
        <IconButton label="Copy share link" onClick={share} disabled={!value}>
          <Link2 />
        </IconButton>
      )}
      <IconButton label="Clear" onClick={clear} disabled={!value}>
        <Eraser />
      </IconButton>
    </>
  );
}

export function OutputActions({
  value,
  filename,
  mimeType
}: {
  value: string;
  /** When set, a download button saves the output under this name. */
  filename?: string;
  mimeType?: string;
}) {
  const download = () => {
    if (filename) {
      downloadText(value, filename, mimeType);
    }
  };

  const copy = () => copyToClipboard(value);

  return (
    <>
      {filename && (
        <IconButton label="Download" disabled={!value} onClick={download}>
          <Download />
        </IconButton>
      )}
      <IconButton label="Copy" disabled={!value} onClick={copy}>
        <Copy />
      </IconButton>
    </>
  );
}
