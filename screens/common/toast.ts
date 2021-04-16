import { Position, Toaster } from "@blueprintjs/core";

const Toast =
  typeof window === "undefined"
    ? null
    : Toaster.create({ position: Position.BOTTOM_RIGHT });

export default Toast;
