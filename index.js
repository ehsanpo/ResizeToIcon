const sharp = require("sharp");
const toIco = require("to-ico");
const fs = require("fs");
const path = require("path");

// Input file path
const inputFilePath = "input.png"; // Replace with your image path
const outputFilePath = "output.ico"; // Output ICO file

// Sizes required for Windows icons
const sizes = [256, 48, 32, 24, 16];

// Function to resize the image and create the ICO file
async function createIco() {
  try {
    console.log("Generating ICO file from:", inputFilePath);

    // Resize the input image into the required sizes
    const resizedImages = await Promise.all(
      sizes.map((size) =>
        sharp(inputFilePath)
          .resize(size, size, {
            fit: "inside",
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          })
          .toBuffer()
      )
    );

    // Combine resized images into a single ICO file
    const icoBuffer = await toIco(resizedImages);

    // Save the ICO file
    fs.writeFileSync(outputFilePath, icoBuffer);
    console.log(`ICO file created: ${outputFilePath}`);
  } catch (error) {
    console.error("Error generating ICO file:", error);
  }
}

// Run the script
createIco();
