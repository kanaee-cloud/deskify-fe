export function extractText(text) {
    if (!text || typeof text !== "string") return "";
    const match = text.match(/\d+(GB|TB)/);
    return match ? match[0] : "";
  }