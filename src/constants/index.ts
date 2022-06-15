import { ToolBox } from "../types";

export const ToolBoxes: ToolBox[] = [
  {
    category: "JSON Tools",
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
    category: "CSV Tools",
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
    category: "XML Tools",
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
    category: "YAML Tools",
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
    category: "Text Tools",
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
    category: "Converters",
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
    category: "Other Tools",
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
