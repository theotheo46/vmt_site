import { cpSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, basename } from "path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "source_img");
const DEST = join(ROOT, "public", "images");

/** Cyrillic source folder → Latin slug in public/images */
const MAPPING = [
  { src: "Кабинеты", dest: "kabinety" },
  { src: "Лестницы", dest: "lestnitsy" },
  { src: "Столы для переговорных", dest: "stoly" },
  { src: "Залы заседаний", dest: "zaly" },
  { src: "Двери", dest: "dveri" },
  { src: "Мебель/Встроенная мебель", dest: "mebel-vstroennaya" },
  { src: "Мебель/Бытовая мебель", dest: "mebel-bytovaya" },
  { src: "Мебель/Мягкая мебель", dest: "mebel-myagkaya" },
  { src: "Гардеробные", dest: "garderobnye" },
  { src: "Стойки ресепшн", dest: "stoyki-resepshn" },
];

function sanitize(name) {
  return name.replace(/\s+/g, "_");
}

function copyDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir)) {
    const srcPath = join(srcDir, entry);
    if (statSync(srcPath).isFile() && !entry.startsWith(".")) {
      const destName = sanitize(entry);
      cpSync(srcPath, join(destDir, destName));
      console.log(`  ${destName}`);
    }
  }
}

// Clean and recreate
mkdirSync(DEST, { recursive: true });

// Copy category folders
for (const { src, dest } of MAPPING) {
  console.log(`\n${src} → ${dest}/`);
  copyDir(join(SRC, src), join(DEST, dest));
}

// Logo
console.log("\nЛого → logo/");
mkdirSync(join(DEST, "logo"), { recursive: true });
cpSync(
  join(SRC, "Лого", "LogoIcon.png"),
  join(DEST, "logo", "LogoIcon.png"),
);

// Hero image (from Кабинеты)
console.log("\nHero → hero/");
mkdirSync(join(DEST, "hero"), { recursive: true });
cpSync(
  join(SRC, "Кабинеты", "main_IMG_7144.jpg"),
  join(DEST, "hero", "main_IMG_7144.jpg"),
);

console.log("\nDone! Images copied to public/images/");
