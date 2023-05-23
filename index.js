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


function writeToFile(fileName, data) {
    let svgString = '';
    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${data.shape}`;
    
    let shapeChoice;
    if (data.shape === 'Triangle') {
        shapeChoice = new Triangle();
    } else if (data.shape === 'Square') {
        shapeChoice = new Square();
    } else {
        shapeChoice = new Circle();
    }
    fs.writeFile(fileName, data, (error) => 
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