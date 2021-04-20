import { Classes } from "@blueprintjs/core";
import { ITool } from "../types";

export const DARK_THEME = {
  id: "dark-theme",
  blueprintjsClass: Classes.DARK,
  gray: {
    1: "#182026",
    2: "#202B33",
    3: "#293742",
    4: "#30404D",
    5: "#394B59"
  }
};

export const LIGHT_THEME = {
  id: "light-theme",
  blueprintjsClass: null,
  gray: {
    1: "#CED9E0",
    2: "#D8E1E8",
    3: "#E1E8ED",
    4: "#EBF1F5",
    5: "#F5F8FA"
  }
};

export const TOOLS: ITool[] = [
  {
    name: "JSON to CSV",
    category: "JSON Tools",
    url: "/json-to-csv"
  },
  {
    name: "Encode Base64",
    category: "Text Utilities",
    url: "/encode-base64"
  },
  {
    name: "Decode Base64",
    category: "Text Utilities",
    url: "/decode-base64"
  },
  {
    name: "Encode HTML",
    category: "Text Utilities",
    url: "/encode-html"
  },
  {
    name: "Decode HTML",
    category: "Text Utilities",
    url: "/decode-html"
  },
  {
    name: "Encode URL",
    category: "Text Utilities",
    url: "/encode-url"
  },
  {
    name: "Decode URL",
    category: "Text Utilities",
    url: "/decode-url"
  },
  {
    name: "Extract text from HTML",
    category: "Text Utilities",
    url: "/extract-text-from-html"
  },
  {
    name: "Hex to Text",
    category: "Text Utilities",
    url: "/hex-to-text"
  },
  {
    name: "Text to Hex",
    category: "Text Utilities",
    url: "/text-to-hex"
  },
  {
    name: "Convert Text Case",
    category: "Text Utilities",
    url: "/case-converter"
  }
];
