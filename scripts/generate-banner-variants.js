const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "../public/banner.png");
const OUT_DIR = path.join(__dirname, "../public/cookies");

// Desktop = full source, no crop. Tablet/mobile keep portrait-ish crops.
const variants = [
  { name: "FanFlaBanner", width: 1366, height: 768 },
  { name: "FanFlaBanner-tablet", width: 1100, height: 680 },
  { name: "FanFlaBanner-mobile", width: 600, height: 768 },
];

(async () => {
  for (const v of variants) {
    const pngOut = path.join(OUT_DIR, `${v.name}.png`);
    const webpOut = path.join(OUT_DIR, `${v.name}.webp`);

    await sharp(SRC)
      .resize(v.width, v.height, {
        fit: "cover",
        position: "centre",
        kernel: sharp.kernel.lanczos3,
      })
      .png({ compressionLevel: 9 })
      .toFile(pngOut);

    await sharp(SRC)
      .resize(v.width, v.height, {
        fit: "cover",
        position: "centre",
        kernel: sharp.kernel.lanczos3,
      })
      .webp({ quality: 95, effort: 6 })
      .toFile(webpOut);

    console.log(`✅ ${v.name} (${v.width}x${v.height})`);
  }
})();
