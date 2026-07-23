import {
  OverlayToaster,
  type Toaster,
  type ToastProps
} from "@blueprintjs/core";

/**
 * App-wide toaster as a singleton. The underlying Blueprint `Toaster` is
 * created lazily on first `show` (client-side, appended to `document.body`)
 * and reused for the lifetime of the app.
 */
class AppToaster {
  private static instance: AppToaster;
  private toaster: Promise<Toaster> | null = null;

  private constructor() {}

  static getInstance(): AppToaster {
    if (!AppToaster.instance) {
      AppToaster.instance = new AppToaster();
    }
    return AppToaster.instance;
  }

  async show(props: ToastProps): Promise<void> {
    if (!this.toaster) {
      this.toaster = OverlayToaster.create();
    }
    const toaster = await this.toaster;
    toaster.show({ timeout: 3000, ...props });
  }
}

export const appToaster = AppToaster.getInstance();
