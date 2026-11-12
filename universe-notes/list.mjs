import { readFile } from "node:fs/promises";

const data = JSON.parse(
  await readFile(
    new URL("./notes/keynote-highlights.json", import.meta.url),
    "utf-8",
  ),
);

const byTopic = new Map();
for (const highlight of data.highlights) {
  if (!byTopic.has(highlight.topic)) {
    byTopic.set(highlight.topic, []);
  }
  byTopic.get(highlight.topic).push(highlight.title);
}

for (const [topic, titles] of byTopic) {
  console.log(topic);
  for (const title of titles) {
    console.log(`  - ${title}`);
  }
}
