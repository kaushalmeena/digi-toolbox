import { Position, Toaster } from "@blueprintjs/core";

export const Toast =
  typeof window === "undefined"
    ? null
    : Toaster.create({ position: Position.BOTTOM_RIGHT });
