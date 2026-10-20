export interface NormalizeOptions {
  lowercase?: boolean;
  accents?: boolean;
  form?: "NFC" | "NFD" | "NFKC" | "NFKD";
}
export function normalize(
  text: string,
  options: NormalizeOptions = {},
): string {
  let result = text.normalize(options.form ?? "NFKC");
  if (options.accents)
    result = result.normalize("NFD").replace(/\p{M}/gu, "").normalize("NFC");
  result = result.replace(/\s+/gu, " ").trim();
  return options.lowercase ? result.toLowerCase() : result;
}
