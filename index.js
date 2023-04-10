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
        name: 'shapeColor'
    },
]

const {
    triangle,
    circle,
    rectangle} = require('./lib/shapes');
// format user data
function formatData(data){

};
// render svg file content
function renderSVG(design) {
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // if (design.shape === 'triangle'){

    // } else if(design.shape === 'circle'){

    // }else if(design.shape === 'rectangle'){

    // }else{
    //     return console.error('Invalid shape');
    // }
    svgString += '</svg>';
    return svgString;
}

// write svg content to file
function writeToFile(data){
// call rendersvg to render the svg file contents
    const svgContent = renderSVG(data);
    fs.writeFile(data.filename, svgContent,(err) =>
    err ? console.error(err) : console.log("Your file was successfully created in the examples folder.") )
}

inquirer.prompt(questions).then(writeToFile);