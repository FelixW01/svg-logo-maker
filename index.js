const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Square, Triangle } = require('./lib/shapes');
const questions = [
    {
        type: 'input',
        message: 'What text would you like your logo to display? (enter up to 3 characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like the text to be? (enter color keyword or a hexadecimal number)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose a shape for your logo',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be? (enter color keyword or a hexadecimal number)',
        name: 'shapeColor',
    }]

//creates and populates the logo.svg
function writeToFile(fileName, data) {
    let logoSVG = '';
    //svg content
    logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
    ${data.shape}`

    let shapeChoice;
    if (data.shape === 'Circle') {
        shapeChoice = new Circle();
        logoSVG += `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>`;
    } else if (data.shape === 'Square') {
        shapeChoice = new Square();
        logoSVG += `<rect width="100%" height="100%" fill="${data.shapeColor}"/>`;
    } else {
        shapeChoice = new Triangle();
        logoSVG += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`;
    }
    logoSVG += `<text x="150" y="120" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`
    logoSVG += "</svg>";

    fs.writeFile(fileName, logoSVG, (error) => 
    error
        ? console.error('There was an error writing the file: ', error)
        : console.log('Generated logo.svg'));
}

//inquires the user and gets input back via inquirer, creats svg file based on the inputs
function inquireUser() {
    inquirer.prompt(questions)
        .then((data) => {
            if (data.text.length > 3) {
                console.log("Value can't be more than 3 characters");
            } else {
                console.log(data);
                writeToFile('logo.svg', data);
            }
        })};

inquireUser();