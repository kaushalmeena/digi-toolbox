export const encodeHTML = (data: string): string =>
  data.replace(/[\u00A0-\u9999<>\&]/g, (i) => "&#" + i.charCodeAt(0) + ";");

export const decodeHTML = (data: string): string =>
  data.replace(/[\u00A0-\u9999<>\&]/g, (i) => "&#" + i.charCodeAt(0) + ";");

export const encodeURL = (data: string): string => encodeURIComponent(data);

export const decodeURL = (data: string): string => decodeURIComponent(data);

export const encodeBase64 = (data: string): string => btoa(data);

export const decodeBase64 = (data: string): string => atob(data);

export const encodeHex = (data: string): string => {
  let result = "";

  for (let i = 0; i < data.length; i++) {
    const hex = data.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result;
};

export const decodeHex = (data: string): string => {
  let result = "";
  const hexArray = data.match(/.{1,4}/g) || [];

  for (let i = 0; i < hexArray.length; i++) {
    result += String.fromCharCode(parseInt(hexArray[i], 16));
  }

  return result;
};

export const extractTextFromHTML = (data: string): string => {
  const parser = new DOMParser();
  const result = parser.parseFromString(data, "text/html");
  return result.documentElement.textContent;
};
