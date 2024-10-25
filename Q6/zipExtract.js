const fs = require("fs");
const zlib = require("zlib");

const compressedFilePath = "./compressedFile.txt.gz";
const outputFilePath = "./extracteedFile.txt";

function extractFile(compressedFilePath, outputFilePath) {
  const readStream = fs.createReadStream(compressedFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gunzip = zlib.createGunzip();

  readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("File extracted successfully.");
    });
}

extractFile(compressedFilePath, outputFilePath);
