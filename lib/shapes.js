class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill='${this.color}/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="100%" height="100%" fill='${this.color}/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 240, 180 56, 184" fill="${this.color}"/>`;
    }
}


module.exports = { Circle, Square, Triangle };