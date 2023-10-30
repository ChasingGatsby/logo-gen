const generateSVG = require("./shapes");

describe("GenerateSVG", () => {
  describe("Triangle", () => {
    it("should return SVG that creates a blue triangle", () => {
      const shape = new Triangle('blue');
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});
