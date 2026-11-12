import { readFile } from "node:fs/promises";

const [word] = process.argv.slice(2);
if (!word) {
  console.error("Usage: npm run search -- <word>");
  process.exit(1);
}

const data = JSON.parse(
  await readFile(
    new URL("./notes/keynote-highlights.json", import.meta.url),
    "utf-8",
  ),
);

const needle = word.toLowerCase();
for (const highlight of data.highlights) {
  if (
    highlight.title.toLowerCase().includes(needle) ||
    highlight.summary.toLowerCase().includes(needle)
  ) {
    console.log(`${highlight.topic} — ${highlight.title}`);
    console.log(`  ${highlight.summary}`);
  }
}
