import { GroupedTool, Tool, ToolCategory } from "@/types";
import { Classes, Colors } from "@blueprintjs/core";
import { DefaultTheme } from "styled-components";

export const DarkTheme: DefaultTheme = {
  id: "dark-theme",
  className: Classes.DARK,
  colors: {
    right: Colors.GREEN3,
    wrong: Colors.RED3,
    gray: {
      1: Colors.DARK_GRAY1,
      2: Colors.DARK_GRAY2,
      3: Colors.DARK_GRAY3,
      4: Colors.DARK_GRAY4,
      5: Colors.DARK_GRAY5
    }
  },
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};

export const LightTheme: DefaultTheme = {
  id: "light-theme",
  className: null,
  colors: {
    right: Colors.GREEN5,
    wrong: Colors.RED5,
    gray: {
      1: Colors.LIGHT_GRAY1,
      2: Colors.LIGHT_GRAY2,
      3: Colors.LIGHT_GRAY3,
      4: Colors.LIGHT_GRAY4,
      5: Colors.LIGHT_GRAY5
    }
  },
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};

export const GroupedTools: GroupedTool[] = [
  {
    name: "JSON Tools",
    category: ToolCategory.JSON,
    tools: [
      {
        name: "JSON to CSV",
        url: "/json-to-csv"
      },
      {
        name: "JSON to XML",
        url: "/json-to-xml"
      },
      {
        name: "JSON to YAML",
        url: "/json-to-yaml"
      },
      {
        name: "Minify JSON",
        url: "/minify-json"
      },
      {
        name: "Prettify JSON",
        url: "/prettify-json"
      }
    ]
  },
  {
    name: "CSV Tools",
    category: ToolCategory.CSV,
    tools: [
      {
        name: "CSV to JSON",
        url: "/csv-to-json"
      },
      {
        name: "CSV to XML",
        url: "/csv-to-xml"
      },
      {
        name: "CSV to YAML",
        url: "/csv-to-yaml"
      }
    ]
  },
  {
    name: "XML Tools",
    category: ToolCategory.XML,
    tools: [
      {
        name: "XML to CSV",
        url: "/xml-to-csv"
      },
      {
        name: "XML to JSON",
        url: "/xml-to-json"
      },
      {
        name: "XML to YAML",
        url: "/xml-to-yaml"
      },
      {
        name: "Prettify XML",
        url: "/prettify-xml"
      },
      {
        name: "Minify XML",
        url: "/minify-xml"
      }
    ]
  },
  {
    name: "YAML Tools",
    category: ToolCategory.YAML,
    tools: [
      {
        name: "YAML to CSV",
        url: "/yaml-to-csv"
      },
      {
        name: "YAML to JSON",
        url: "/yaml-to-json"
      },
      {
        name: "YAML to XML",
        url: "/yaml-to-xml"
      }
    ]
  },
  {
    name: "Text Tools",
    category: ToolCategory.TEXT,
    tools: [
      {
        name: "Base64 Encode",
        url: "/base64-encode"
      },
      {
        name: "Base64 Decode",
        url: "/base64-decode"
      },
      {
        name: "Extract text from HTML",
        url: "/extract-text-from-html"
      },
      {
        name: "Extract text from XML",
        url: "/extract-text-from-xml"
      },
      {
        name: "HTML Encode",
        url: "/html-encode"
      },
      {
        name: "HTML Decode",
        url: "/html-decode"
      },
      {
        name: "URL Encode",
        url: "/url-encode"
      },
      {
        name: "URL Decode",
        url: "/url-decode"
      },
      {
        name: "Slash Escape",
        url: "/slash-escape"
      },
      {
        name: "Slash Unescape",
        url: "/slash-unescape"
      },
      {
        name: "Hex to Text",
        url: "/hex-to-text"
      },
      {
        name: "Text to Hex",
        url: "/text-to-hex"
      }
    ]
  },
  {
    name: "Converters",
    category: ToolCategory.CONVERTER,
    tools: [
      {
        name: "Angle Converter",
        url: "/angle-converter"
      },
      {
        name: "Area Converter",
        url: "/area-converter"
      },
      {
        name: "Base Converter",
        url: "/base-converter"
      },
      {
        name: "Color Converter",
        url: "/color-converter"
      },
      {
        name: "Energy Converter",
        url: "/energy-converter"
      },
      {
        name: "Length Converter",
        url: "/length-converter"
      },
      {
        name: "Mass Converter",
        url: "/mass-converter"
      },
      {
        name: "Pressure Converter",
        url: "/pressure-converter"
      },
      {
        name: "Speed Converter",
        url: "/speed-converter"
      },
      {
        name: "Temperature Converter",
        url: "/temperature-converter"
      }
    ]
  },
  {
    name: "Other Tools",
    category: ToolCategory.OTHER,
    tools: [
      {
        name: "Base64 to Image",
        url: "/base64-to-image"
      },
      {
        name: "Image to Base64",
        url: "/image-to-base64"
      },
      {
        name: "Image Color Picker",
        url: "/image-color-picker"
      },
      {
        name: "Diff-Checker",
        url: "/diff-checker"
      }
    ]
  }
];

export const Tools: Tool[] = GroupedTools.reduce(
  (prev: Tool[], curr: GroupedTool) =>
    prev.concat(
      curr.tools.map((tool) => ({ ...tool, category: curr.category }))
    ),
  []
);

export const ToastMessages = {
  COPY_SUCCESS: "Copied to clipboard.",
  FILE_UPLOAD_FAIL: "Unable to upload file.",
  IMAGE_UPLOAD_FAIL: "Unable to upload image file.",
  IMAGE_COLOR_CAPTURE_FAIL: "Can't capture color from image.",
  INVALID_IMAGE: "Invalid image detected."
};
