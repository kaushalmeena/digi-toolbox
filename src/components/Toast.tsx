import { OverlayToaster, Position } from "@blueprintjs/core";

const NoopToast = {
  show: () => {}
};

const Toast =
  typeof window === "undefined"
    ? NoopToast
    : OverlayToaster.create({
        position: Position.TOP
      });

export default Toast;
