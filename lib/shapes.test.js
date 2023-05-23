const {Circle, Square, Triangle} = require("./shapes.js")

//testing for circle with blue background to render
describe('Circle', () => {
    it('tests for a circle with a blue background', () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="blue"/>'
    );
    });
});

//testing for square with red background to render
describe('Square', () => {
    it('tests for a square with a red background', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
        '<rect width="100%" height="100%" fill="red"/>'
    );
    });
});

//testing for triangle with green background to render
describe('Triangle', () => {
    it('tests for a Triangle with a green background', () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
        '<polygon points="150, 18 240, 180 56, 184" fill="green"/>'
    );
    });
});
