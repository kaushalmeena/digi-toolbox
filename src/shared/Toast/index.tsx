import { Position, Toaster } from "@blueprintjs/core";

const Toast =
  typeof window === "undefined"
    ? null
    : Toaster.create({
        position: Position.BOTTOM_RIGHT,
        className: "position-fixed"
      });

export default Toast;
