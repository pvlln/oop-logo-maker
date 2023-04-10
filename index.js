const fs = require('fs');
const inquirer = require('inquirer');

// Questions to be answered by the user
const questions = [
    {
        type: 'input',
        message: 'Enter the name for the logo file',
        name: 'filename'
    },
    {
        type: 'input',
        message: 'Please enter up to three characters to be featured in your logo: ',
        name: 'txt'
    },
    {
        type: 'input',
        message: 'Please enter the color for your text: ',
        name: 'txtColor'
    },
    {
        type: 'list',
        message: 'Please select a shape: ',
        choices: ['triangle', 'circle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Please enter a color for your shape: ',
        name: 'fillColor'
    },
]

const {
    Triangle,
    Circle,
    Rectangle} = require('./lib/shapes');
// format user data
function formatData({shape, fillColor, txt, txtColor}){
    var shapeClass;

    switch (shape) {
        case 'triangle':
            shapeClass = Triangle
            break;
        case 'circle':
            shapeClass = Circle
            break;
        case 'rectangle':
            shapeClass = Rectangle
            break;
    }

    return new shapeClass(fillColor, txt, txtColor).render();
};

// write svg content to file
function writeToFile(data){
// call rendersvg to render the svg file contents
    const svgContent = formatData(data);
    fs.writeFile(`./examples/${data.filename}.svg`, svgContent,(err) =>
    err ? console.error(err) : console.log("Your file was successfully created in the examples folder.") )
}

inquirer.prompt(questions).then(writeToFile);