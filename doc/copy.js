import fs from "fs/promises"; // 异步版本的文件系统模块
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义源文件夹和目标文件的路径
const sourceDir = path.join(__dirname, "components");

async function writeContents(srcDir) {
  try {
    const items = await fs.readdir(srcDir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(srcDir, item.name);

      if (item.isDirectory()) {
        await writeContents(fullPath);
      } else if (item.name === "example.jsx") {
        const content = await fs.readFile(fullPath, "utf8");
        const outputFile = path.join(srcDir, "example.md");
        await fs.writeFile(outputFile, content + "\n");
      }
    }
  } catch (e) {
    console.error("操作文件时发生错误：", e);
  }
}

writeContents(sourceDir)
  .then(() => {
    console.log("复制文件成功");
  })
  .catch((e) => {
    console.error("复制文件失败：", e);
  });
