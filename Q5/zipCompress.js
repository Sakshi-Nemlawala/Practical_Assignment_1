const fs = require("fs");
const zlib = require("zlib");

const inputFilePath = "./myFile1.txt";
const outputFilePath = "./compressedFile.txt.gz";

function compressFile(inputFilePath, outputFilePath) {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gzip = zlib.createGzip();

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("File compressed successfully.");
    });
}

compressFile(inputFilePath, outputFilePath);
