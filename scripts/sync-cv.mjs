import { copyFile, mkdir, readdir, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDirectory = join(root, "cv");
const destination = join(root, "public", "generated", "cv.pdf");

try {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });
  const pdfs = entries.filter((entry) => entry.isFile() && /\.pdf$/i.test(entry.name));
  if (pdfs.length !== 1) {
    throw new Error(`Expected exactly one PDF in cv/, found ${pdfs.length}.`);
  }
  const source = join(sourceDirectory, pdfs[0].name);
  const contents = await readFile(source);
  if (!contents.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
    throw new Error(`${pdfs[0].name} is not a valid PDF file.`);
  }
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
  console.log(`CV synchronized: cv/${pdfs[0].name} -> public/generated/cv.pdf`);
} catch (error) {
  console.error(`CV synchronization failed: ${error.message}`);
  process.exitCode = 1;
}
