import * as fs from "node:fs";
import * as path from "node:path";

// The entry line below must stay byte-for-byte (single line, no trailing newline).
const LINE =
  "Mercury is in retrograde, which means your code will break in ways that feel personal. Back up everything twice.";

function writeEntry(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, { encoding: "utf8" });
}

writeEntry();
