export const encodeHTML = (data: string): string =>
  data.replace(/[\u00A0-\u9999<>\&]/g, (i) => "&#" + i.charCodeAt(0) + ";");
