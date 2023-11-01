class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
    this.code = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
    this.code = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
    this.code = `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
  }
}

function selectShape(choice, color, text, textColor) {
  switch (choice) {
    case "circle":
      return new Circle(color, text, textColor);
    case "triangle":
      return new Triangle(color, text, textColor);
    case "square":
      return new Square(color, text, textColor);
  }
}

function generateSVG(data) {
  const finalShape = selectShape(
    data.shape,
    data.shapeColor,
    data.text,
    data.textColor
  );
  const newText = finalShape.text;
  if (newText.length > 3) {
    return console.error("Your text cannot be longer than three(3) characters");
  }
  if (!finalShape.color || !finalShape.textColor) {
    return console.error("Please include a color.");
  }
  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="white" />

${finalShape.code}

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`;
}

const shapes = {
  generateSVG,
  selectShape,
  Shape: Shape,
  Triangle: Triangle,
  Circle: Circle,
  Square: Square,
};

module.exports = shapes;
