# Generate Windows Icon File from PNG

This project provides a Node.js script to create a `.ico` file suitable for Windows applications. The generated `.ico` file includes multiple sizes (256x256, 48x48, 32x32, 24x24, and 16x16) for better scaling.

## Features

- Resizes a source PNG image to the required dimensions.
- Bundles the resized images into a single `.ico` file.
- Ensures proportional scaling with customizable background color.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/generate-windows-icon.git
   cd generate-windows-icon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Place your source PNG file in the same directory as the script and rename it to `input.png` (or modify the script to use a different file name).

2. Run the script:

   ```bash
   node generate-icon.js
   ```

3. The resulting `output.ico` file will be created in the same directory.

## Customization

### Change Input and Output File Names

You can modify the `inputFilePath` and `outputFilePath` variables in `generate-icon.js` to use different file names:

```javascript
const inputFilePath = "your-image.png";
const outputFilePath = "your-output.ico";
```

### Adjust Background Color

If your source image contains transparency, you can customize the background color:

```javascript
background: { r: 255, g: 255, b: 255, alpha: 0 },
```

- `r`, `g`, `b` define the red, green, and blue components of the background color.
- `alpha` defines the transparency (0 for fully transparent, 1 for fully opaque).

## Dependencies

- [`sharp`](https://www.npmjs.com/package/sharp): Image processing library.
- [`to-ico`](https://www.npmjs.com/package/to-ico): Combines images into an `.ico` file.

## Example Output

The `output.ico` file will include the following sizes:

- 256x256
- 48x48
- 32x32
- 24x24
- 16x16

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Contributions

Feel free to submit pull requests or report issues. Contributions are welcome!
