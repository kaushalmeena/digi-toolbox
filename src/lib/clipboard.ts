import { toast } from "sonner";

/** Copies `text` and confirms with a toast; failures surface as an error toast. */
export async function copyToClipboard(text: string, label = "Copied") {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(label);
  } catch {
    toast.error("Couldn't access the clipboard");
  }
}

export async function readClipboard(): Promise<string | null> {
  try {
    return await navigator.clipboard.readText();
  } catch {
    toast.error("Clipboard access was blocked by the browser");
    return null;
  }
}
