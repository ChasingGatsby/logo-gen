function selectShape(choice, color) {
  switch (choice) {
    case "circle":
      return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    case "triangle":
      return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
    case "square":
      return `<rect x="70" y="20" width="160" height="160" fill="${color}"/>`;
  }
}

function generateSVG(data) {
  const finalShape = selectShape(data.shape, data.shapeColor);
  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="white" />

${finalShape}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`;
}

module.exports = generateSVG;
