// Worst Fix Ever: Funniest Commit Message (round 2)
// Writes a single commit message line to /output/entry.txt.
// The line: a fix that traded a slow query for a permanently wrong answer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: slow query by caching the wrong answer; fast now, wrong forever";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
