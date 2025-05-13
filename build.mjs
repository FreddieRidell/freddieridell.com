import fs from "fs/promises";
import formatBytes from "bytes";
import { minify } from "html-minifier";
import { gzip } from "node-gzip";

function getStringBytes(s) {
  const textEncoder = new TextEncoder();
  return textEncoder.encode(s).length;
}

async function main(htmlSrcPath, cssSrcPath, outputPath) {
  const [htmlSrc, cssSrc] = await Promise.all(
    [htmlSrcPath, cssSrcPath].map((p) => fs.readFile(p, "utf8")),
  );

  const htmlOut = minify(htmlSrc.replace("STYLE_REPLACE_MARKER", cssSrc), {
    collapseWhitespace: true,
    minifyJs: true,
  });

  const withBytes = htmlOut.replace(
    "BYTES_INFO_MARKER",
    `${formatBytes(getStringBytes(htmlOut), {
      decimalPlaces: 1,
    })}, (${formatBytes(getStringBytes(await gzip(htmlOut)), {
      decimalPlaces: 1,
    })} gziped)`,
  );

  await fs.writeFile(outputPath, withBytes);
}

main(...process.argv.slice(2));
