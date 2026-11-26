import { mkdirSync, writeFileSync } from "node:fs";

// The joke works by keeping the flat bulletin voice while the weather itself
// misbehaves: rain falls sideways, so the official advice escalates from
// hats to dogs to each other, as if that were normal procedure.
const LINE = "Plipport: rain today, falling sideways. Residents are advised to hold on to their hats, their dogs, and each other.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
