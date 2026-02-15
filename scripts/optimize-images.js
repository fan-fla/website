const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const COOKIES_DIR = path.join(__dirname, "../public/cookies");
const QUALITY = 80;

async function optimizeImages() {
  console.log("🖼️  Optimizing images...\n");

  const files = fs.readdirSync(COOKIES_DIR);
  const imageFiles = files.filter((file) =>
    /\.(png|jpg|jpeg)$/i.test(file)
  );

  let converted = 0;
  let skipped = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(COOKIES_DIR, file);
    const outputFile = file.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    const outputPath = path.join(COOKIES_DIR, outputFile);

    // Check if WebP exists and is newer than source
    if (fs.existsSync(outputPath)) {
      const inputStat = fs.statSync(inputPath);
      const outputStat = fs.statSync(outputPath);

      if (outputStat.mtime > inputStat.mtime) {
        console.log(`⏭️  Skipped: ${file} (WebP is up to date)`);
        skipped++;
        continue;
      }
    }

    try {
      await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const reduction = Math.round((1 - outputSize / inputSize) * 100);

      console.log(
        `✅ Converted: ${file} → ${outputFile} (${reduction}% smaller)`
      );
      converted++;
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }

  console.log(`\n📊 Summary: ${converted} converted, ${skipped} skipped`);
}

optimizeImages().catch(console.error);
