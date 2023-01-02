export const appendZero = (number?: number): string | null =>
  number && number >= 0 ? `${number < 10 ? "0" : ""}${number}` : "00";
