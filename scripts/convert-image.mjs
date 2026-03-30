import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const imgBuffer = readFileSync(resolve(root, "Imagens/header.png"));

// Hero version — 3:4 crop from top, 800px wide, WebP
await sharp(imgBuffer)
  .resize(800, 1067, { fit: "cover", position: "top" })
  .webp({ quality: 82 })
  .toFile(resolve(root, "public/kathyele-hero.webp"));

// Speaker section — 4:5 crop, 640px wide, WebP
await sharp(imgBuffer)
  .resize(640, 800, { fit: "cover", position: "top" })
  .webp({ quality: 82 })
  .toFile(resolve(root, "public/kathyele-speaker.webp"));

// Fallback PNG for older browsers
await sharp(imgBuffer)
  .resize(800, 1067, { fit: "cover", position: "top" })
  .png({ quality: 85 })
  .toFile(resolve(root, "public/kathyele-hero.png"));

console.log("Done — images generated in public/");
