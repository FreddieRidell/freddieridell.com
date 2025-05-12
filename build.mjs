import fs from "fs/promises";
import path from "path";

async function main(htmlSrcPath, cssSrcPath, outputPath) {
  const [htmlSrc, cssSrc] = await Promise.all(
    [htmlSrcPath, cssSrcPath].map((p) => fs.readFile(p, "utf8")),
  );

  const htmlOut = htmlSrc.replace(
    "<style />",
    ["<style>", cssSrc, "</style>"].join(" "),
  );

  await fs.writeFile(outputPath, htmlOut);
}

main(...process.argv.slice(2));
