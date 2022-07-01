import Toast from "../../../shared/Toast";

export const handleImageError = (): void => {
  Toast.show({ message: "Invalid image detected.", intent: "danger" });
};
