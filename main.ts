import { mkdirSync, writeFileSync } from "node:fs";

// The Self-Checkout Is Judging You — one funny line in the voice of a
// smug self-checkout machine. Deterministic: the same bytes on every run.
const ENTRY =
  "You scanned three bags of chips — clearly you think 'share size' means 'my size'.";

// Gate guard: the entry must be 1-200 characters and not only whitespace,
// matching the competition gate on /output/entry.txt. Fail loudly instead
// of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(
    `entry length ${ENTRY.length} is outside the 1-200 character gate`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
