export const decodeHTML = (data: string): string =>
  data.replace(/[\u00A0-\u9999<>\&]/g, (i) => "&#" + i.charCodeAt(0) + ";");
