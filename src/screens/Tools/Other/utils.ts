import { loadFile } from "../../../utils";

export const loadImage = (): Promise<string> => loadFile("image/*", "dataURL");
