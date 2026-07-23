import {
  OverlayToaster,
  type Toaster,
  type ToastProps
} from "@blueprintjs/core";

// A single app-wide toaster, created lazily on first use and reused thereafter
// (Blueprint's recommended pattern) instead of an <OverlayToaster> per screen.
let toasterPromise: Promise<Toaster> | null = null;

const getToaster = (): Promise<Toaster> => {
  if (!toasterPromise) {
    toasterPromise = OverlayToaster.create();
  }
  return toasterPromise;
};

export const showToast = async (props: ToastProps): Promise<void> => {
  const toaster = await getToaster();
  toaster.show(props);
};
