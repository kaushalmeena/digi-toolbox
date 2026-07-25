import {
  CalculatorIcon,
  CodeBlockIcon,
  CodeIcon,
  FontIcon,
  GridViewIcon,
  ListIcon,
  ThIcon
} from "@blueprintjs/icons";
import type { ReactElement } from "react";
import { type GroupedTool, type Tool, ToolCategory } from "@/types/tools";

/**
 * Icon per tool category, shared by the home page sections and the omnibar so a
 * category looks the same wherever it appears.
 */
export const CATEGORY_ICONS: Record<ToolCategory, ReactElement> = {
  [ToolCategory.JSON]: <CodeIcon />,
  [ToolCategory.CSV]: <ThIcon />,
  [ToolCategory.XML]: <CodeBlockIcon />,
  [ToolCategory.YAML]: <ListIcon />,
  [ToolCategory.TEXT]: <FontIcon />,
  [ToolCategory.CONVERTER]: <CalculatorIcon />,
  [ToolCategory.OTHER]: <GridViewIcon />
};

export const GroupedTools: GroupedTool[] = [
  {
    name: "JSON Tools",
    category: ToolCategory.JSON,
    tools: [
      {
        name: "JSON to CSV",
        path: "/json-to-csv"
      },
      {
        name: "JSON to XML",
        path: "/json-to-xml"
      },
      {
        name: "JSON to YAML",
        path: "/json-to-yaml"
      },
      {
        name: "Minify JSON",
        path: "/minify-json"
      },
      {
        name: "Prettify JSON",
        path: "/prettify-json"
      }
    ]
  },
  {
    name: "CSV Tools",
    category: ToolCategory.CSV,
    tools: [
      {
        name: "CSV to JSON",
        path: "/csv-to-json"
      },
      {
        name: "CSV to XML",
        path: "/csv-to-xml"
      },
      {
        name: "CSV to YAML",
        path: "/csv-to-yaml"
      }
    ]
  },
  {
    name: "XML Tools",
    category: ToolCategory.XML,
    tools: [
      {
        name: "XML to CSV",
        path: "/xml-to-csv"
      },
      {
        name: "XML to JSON",
        path: "/xml-to-json"
      },
      {
        name: "XML to YAML",
        path: "/xml-to-yaml"
      },
      {
        name: "Prettify XML",
        path: "/prettify-xml"
      },
      {
        name: "Minify XML",
        path: "/minify-xml"
      }
    ]
  },
  {
    name: "YAML Tools",
    category: ToolCategory.YAML,
    tools: [
      {
        name: "YAML to CSV",
        path: "/yaml-to-csv"
      },
      {
        name: "YAML to JSON",
        path: "/yaml-to-json"
      },
      {
        name: "YAML to XML",
        path: "/yaml-to-xml"
      }
    ]
  },
  {
    name: "Text Tools",
    category: ToolCategory.TEXT,
    tools: [
      {
        name: "Base64 Encode",
        path: "/base64-encode"
      },
      {
        name: "Base64 Decode",
        path: "/base64-decode"
      },
      {
        name: "Extract text from HTML",
        path: "/extract-text-from-html"
      },
      {
        name: "Extract text from XML",
        path: "/extract-text-from-xml"
      },
      {
        name: "HTML Encode",
        path: "/html-encode"
      },
      {
        name: "HTML Decode",
        path: "/html-decode"
      },
      {
        name: "URL Encode",
        path: "/url-encode"
      },
      {
        name: "URL Decode",
        path: "/url-decode"
      },
      {
        name: "Slash Escape",
        path: "/slash-escape"
      },
      {
        name: "Slash Unescape",
        path: "/slash-unescape"
      },
      {
        name: "Hex to Text",
        path: "/hex-to-text"
      },
      {
        name: "Text to Hex",
        path: "/text-to-hex"
      },
      {
        name: "Hash Generator",
        path: "/hash-generator"
      }
    ]
  },
  {
    name: "Converters",
    category: ToolCategory.CONVERTER,
    tools: [
      {
        name: "Angle Converter",
        path: "/angle-converter"
      },
      {
        name: "Area Converter",
        path: "/area-converter"
      },
      {
        name: "Base Converter",
        path: "/base-converter"
      },
      {
        name: "Color Converter",
        path: "/color-converter"
      },
      {
        name: "Energy Converter",
        path: "/energy-converter"
      },
      {
        name: "Length Converter",
        path: "/length-converter"
      },
      {
        name: "Mass Converter",
        path: "/mass-converter"
      },
      {
        name: "Pressure Converter",
        path: "/pressure-converter"
      },
      {
        name: "Speed Converter",
        path: "/speed-converter"
      },
      {
        name: "Temperature Converter",
        path: "/temperature-converter"
      }
    ]
  },
  {
    name: "Other Tools",
    category: ToolCategory.OTHER,
    tools: [
      {
        name: "Base64 to Image",
        path: "/base64-to-image"
      },
      {
        name: "Image to Base64",
        path: "/image-to-base64"
      },
      {
        name: "Image Color Picker",
        path: "/image-color-picker"
      },
      {
        name: "Diff-Checker",
        path: "/diff-checker"
      },
      {
        name: "JWT Decoder",
        path: "/jwt-decoder"
      },
      {
        name: "UUID Generator",
        path: "/uuid-generator"
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
