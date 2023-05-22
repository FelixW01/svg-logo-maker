class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 240, 180 56, 184" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="150" y="125" width="30" height="30"fill='${this.color}/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill='${this.color}/>`;
    }
}

module.exports = { Triangle, Square, Circle };