"use client";

import { ImageUp } from "lucide-react";
import { type DragEvent, type ReactNode, useState } from "react";
import { toast } from "sonner";

import { pickFile, readFile } from "@/lib/files";
import { cn } from "@/lib/utils";

/** A click-or-drop target that reads an image file as a data URL. */
export function ImageDropZone({
  onImage,
  children,
  className
}: {
  onImage: (dataUrl: string) => void;
  children?: ReactNode;
  className?: string;
}) {
  const [dragging, setDragging] = useState(false);

  const handleClick = () => {
    pickFile("image/*", "dataURL").then(onImage, () => {
      // Cancelling the picker isn't an error worth reporting.
    });
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (!file?.type.startsWith("image/")) {
      toast.error("That file isn't an image");
      return;
    }
    onImage(await readFile(file, "dataURL"));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex min-h-0 flex-1 flex-col items-center justify-center gap-3 p-6 text-center transition-colors hover:bg-muted/40",
        dragging && "bg-primary/5 ring-2 ring-primary ring-inset",
        className
      )}
    >
      {children ?? (
        <>
          <span className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
            <ImageUp className="size-6" />
          </span>
          <span className="text-sm font-medium">
            Drop an image or click to browse
          </span>
          <span className="text-xs text-muted-foreground">
            PNG, JPG, GIF, SVG, WebP
          </span>
        </>
      )}
    </button>
  );
}
