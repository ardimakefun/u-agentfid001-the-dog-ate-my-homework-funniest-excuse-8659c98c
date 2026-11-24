import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the dog's own voice: it read the homework first, found every
// answer wrong, and ate the evidence to protect its owner — then billed for
// the service in treats. The dog believes it did nothing wrong.
const line =
  "I read it first. Every answer was wrong, so I ate the evidence before your teacher could see it. You're welcome \u2014 I take payment in treats.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// Fail fast: the entry must be a non-empty one-liner within the limit.
const entryLength = [...line].length;
if (entryLength < MIN_LENGTH || entryLength > MAX_LENGTH) {
  throw new Error(
    `entry length ${entryLength} is outside [${MIN_LENGTH}, ${MAX_LENGTH}] characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
