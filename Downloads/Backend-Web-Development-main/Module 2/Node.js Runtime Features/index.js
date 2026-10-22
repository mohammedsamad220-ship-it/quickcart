
const fs = require("fs");
const path = require("path");

// Input and output file paths
const INPUT = path.join(__dirname, "sample-data.txt");
const OUTPUT = path.join(__dirname, "sample-copy.txt");

// PART 1: Read the whole file into memory
function readWholeFile() {
  fs.readFile(INPUT, (err, data) => {
    if (err) {
      return console.error("readFile error:", err.message);
    }

    console.log(
      `readFile: loaded ${data.length} bytes into memory at once`
    );

    // Start streaming after reading the file
    streamFile();
  });
}

// PART 2: Copy the file using streams
function streamFile() {
  const read = fs.createReadStream(INPUT);
  const write = fs.createWriteStream(OUTPUT);

  write.on("finish", () => {
    console.log(
      "stream: finished copying via chunks (peak memory stays flat)"
    );
  });

  read.on("error", (err) => {
    console.error("Stream read error:", err.message);
    write.destroy();
  });

  write.on("error", (err) => {
    console.error("Stream write error:", err.message);
  });

  read.pipe(write);
}

// PART 3: Explanation
/*
fs.readFile loads the entire file into memory at once, so memory
usage increases with the file size. Streams move data in small chunks,
so they use less memory and keep peak memory relatively flat even
when copying large files.
*/

// Run both assignment tasks
readWholeFile();
