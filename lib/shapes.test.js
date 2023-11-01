const {Triangle, Circle, Square, Shape} = require("./shapes");

describe("GenerateSVG", () => {
  describe("Triangle", () => {
    it("should return SVG that creates a blue triangle", () => {
      const shape = new Triangle('blue');
      expect(shape.code).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  })
  describe('Square', () => {
    it('should return SVG that creates a green square', () => {
      const shape = new Square('#008000');
      expect(shape.code).toEqual(`<rect x="70" y="20" width="160" height="160" fill="#008000" />`)
    })
  })
  describe('Circle', () => {
    it('should return SVG that creates a purple circle', () => {
      const shape = new Circle ('Purple');
      expect(shape.code).toEqual(`<circle cx="150" cy="100" r="80" fill="Purple" />`)
    })
  });
});

describe('Errors', () => {
  describe('Text', () => {
    it('should throw an error if the user inputs a text string longer than three(3) letters', () => {
      const testShape = new Shape('asdf')
      const err = console.error("Your text cannot be longer than three(3) characters")
      expect(testShape.length).toEqual(err)
    })
  })
  describe('Color', () => {
    it('should throw an error if user does not input a color for either text or shape', () => {
      const testShape = new Shape('')
      const err = console.error ('Please include a color.')
      expect(testShape.color || testShape.textColor).toEqual(err)
    })

  })
})