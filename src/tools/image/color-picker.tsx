"use client";

import { Eraser, ImageUp } from "lucide-react";
import { type MouseEvent, useRef, useState } from "react";

import { IconButton } from "@/components/tool/icon-button";
import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { pickFile } from "@/lib/files";

import { formatColor, type RGB } from "../converters/lib";
import { ImageDropZone } from "./drop-zone";

const MAX_SWATCHES = 12;

function readPixel(event: MouseEvent<HTMLCanvasElement>): RGB | null {
  const canvas = event.currentTarget;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return null;
  }
  const rect = canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
  const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
  const [r, g, b] = context.getImageData(x, y, 1, 1).data;
  return { r, g, b };
}

function hexToRgb(hex: string): RGB {
  return {
    r: Number.parseInt(hex.slice(1, 3), 16),
    g: Number.parseInt(hex.slice(3, 5), 16),
    b: Number.parseInt(hex.slice(5, 7), 16)
  };
}

function Swatch({
  hex,
  onSelect
}: {
  hex: string;
  onSelect: (color: RGB) => void;
}) {
  const handleClick = () => onSelect(hexToRgb(hex));

  return (
    <button
      type="button"
      title={hex}
      aria-label={`Select ${hex}`}
      onClick={handleClick}
      className="aspect-square rounded-md border shadow-xs transition-transform hover:scale-110"
      style={{ background: hex }}
    />
  );
}

export default function ImageColorPicker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasImage, setHasImage] = useState(false);
  const [hover, setHover] = useState<RGB | null>(null);
  const [picked, setPicked] = useState<RGB | null>(null);
  const [swatches, setSwatches] = useState<string[]>([]);

  const loadImage = (dataUrl: string) => {
    const image = new Image();
    image.onload = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d", { willReadFrequently: true });
      if (!canvas || !context) {
        return;
      }
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context.drawImage(image, 0, 0);
      setHasImage(true);
    };
    image.src = dataUrl;
  };

  const handlePick = (event: MouseEvent<HTMLCanvasElement>) => {
    const color = readPixel(event);
    if (!color) {
      return;
    }
    setPicked(color);
    const hex = formatColor(color, "hex");
    setSwatches((current) =>
      [hex, ...current.filter((swatch) => swatch !== hex)].slice(
        0,
        MAX_SWATCHES
      )
    );
  };

  const handleOpenAnother = () => {
    pickFile("image/*", "dataURL").then(loadImage, () => {
      // Cancelling the picker isn't an error worth reporting.
    });
  };

  const handleHover = (event: MouseEvent<HTMLCanvasElement>) =>
    setHover(readPixel(event));

  const handleHoverEnd = () => setHover(null);

  const handleClearHistory = () => setSwatches([]);

  const current = hover ?? picked;

  return (
    <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-[1fr_20rem]">
      <Pane>
        <PaneHeader
          title="Image"
          actions={
            hasImage && (
              <IconButton
                label="Open another image"
                onClick={handleOpenAnother}
              >
                <ImageUp />
              </IconButton>
            )
          }
        />
        <PaneBody className="items-center justify-center overflow-auto bg-muted/30">
          {!hasImage && (
            <ImageDropZone onImage={loadImage} className="self-stretch" />
          )}
          <canvas
            ref={canvasRef}
            hidden={!hasImage}
            className="max-h-full max-w-full cursor-crosshair object-contain"
            onMouseMove={handleHover}
            onMouseLeave={handleHoverEnd}
            onClick={handlePick}
          />
        </PaneBody>
      </Pane>
      <div className="flex min-h-0 flex-col gap-3">
        <Pane className="min-h-0">
          <PaneHeader title={hover ? "Under cursor" : "Picked color"} />
          <div
            className="h-24 border-b transition-colors"
            style={{
              background: current ? formatColor(current, "hex") : undefined
            }}
          />
          <ResultList
            emptyText="Click the image to pick a color."
            items={
              current
                ? (["hex", "rgb", "hsl"] as const).map((format) => ({
                    id: format,
                    label: format.toUpperCase(),
                    value: formatColor(current, format)
                  }))
                : []
            }
          />
        </Pane>
        {swatches.length > 0 && (
          <Pane className="min-h-0">
            <PaneHeader
              title="History"
              actions={
                <IconButton label="Clear history" onClick={handleClearHistory}>
                  <Eraser />
                </IconButton>
              }
            />
            <div className="grid grid-cols-6 gap-2 p-3">
              {swatches.map((swatch) => (
                <Swatch key={swatch} hex={swatch} onSelect={setPicked} />
              ))}
            </div>
          </Pane>
        )}
      </div>
    </div>
  );
}
