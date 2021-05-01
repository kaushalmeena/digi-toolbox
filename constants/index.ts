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
    name: "CSV to JSON",
    category: "CSV",
    url: "/csv-to-json"
  },
  {
    name: "CSV to XML",
    category: "CSV",
    url: "/csv-to-xml"
  },
  {
    name: "CSV to YAML",
    category: "CSV",
    url: "/csv-to-yaml"
  },
  {
    name: "JSON to CSV",
    category: "JSON",
    url: "/json-to-csv"
  },
  {
    name: "JSON to XML",
    category: "JSON",
    url: "/json-to-xml"
  },
  {
    name: "JSON to YAML",
    category: "JSON",
    url: "/json-to-yaml"
  },
  {
    name: "Minify JSON",
    category: "JSON",
    url: "/minify-json"
  },
  {
    name: "Prettify JSON",
    category: "JSON",
    url: "/prettify-json"
  },
  {
    name: "Base64 Encode",
    category: "TEXT",
    url: "/base64-encode"
  },
  {
    name: "Base64 Decode",
    category: "TEXT",
    url: "/base64-decode"
  },
  {
    name: "Change Case",
    category: "TEXT",
    url: "/change-case"
  },
  {
    name: "Extract text from HTML",
    category: "TEXT",
    url: "/extract-text-from-html"
  },
  {
    name: "Extract text from XML",
    category: "TEXT",
    url: "/extract-text-from-xml"
  },
  {
    name: "HTML Encode",
    category: "TEXT",
    url: "/html-encode"
  },
  {
    name: "HTML Decode",
    category: "TEXT",
    url: "/html-decode"
  },
  {
    name: "URL Encode",
    category: "TEXT",
    url: "/url-encode"
  },
  {
    name: "URL Decode",
    category: "TEXT",
    url: "/url-decode"
  },
  {
    name: "Slash Escape",
    category: "TEXT",
    url: "/slash-escape"
  },
  {
    name: "Slash Unescape",
    category: "TEXT",
    url: "/slash-unescape"
  },
  {
    name: "Hex to Text",
    category: "TEXT",
    url: "/hex-to-text"
  },
  {
    name: "Text to Hex",
    category: "TEXT",
    url: "/text-to-hex"
  },
  {
    name: "XML to CSV",
    category: "XML",
    url: "/xml-to-csv"
  },
  {
    name: "XML to JSON",
    category: "XML",
    url: "/xml-to-json"
  },
  {
    name: "XML to YAML",
    category: "XML",
    url: "/xml-to-yaml"
  }
];
