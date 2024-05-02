export function redableString(text: string): string {
  return text
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function shortifyText(text: string): string {
  return `${text.slice(0, 72)}...`;
}
