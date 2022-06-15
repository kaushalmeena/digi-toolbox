import Toast from "../../../shared/Toast";
import { loadFile } from "../../../utils";

export const loadImage = (): Promise<string> => loadFile("image/*", "dataURL");

export const handleImageError = () => {
  Toast.show({ message: "Invalid image detected.", intent: "danger" });
};
