export default function normalizeHTMLString (string) {
  return string.replace(/\n\s*/g, '')
}
