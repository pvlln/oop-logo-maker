# 05 Third-Party APIs: Work Day Scheduler

## Description

I created a simple command line application that creates a custom logo for my web development projects. This way, I will not have to hire a graphic designer. My application is simple, the command line uses inquirer to facilitate the user inputting the customized info. and the files use OOP to create the customized logo. 

## Installation 

To install this application, you need to run a terminal in the repository, and install npm. After that, you should be able to start the application by using node.

## Contribution 
 You cannot contribute to this code. I will not accept any changes to my repository. Contributions are not welcome.

## Usage 
In order to use, you need to input corresponding answers to the questions on the information that you want as the design of your logo.

## License 
 ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
This project is licensed under the MIT license. For more information on this licensing agreement, please go to the link below.
[MIT License](https://opensource.org/licenses/MIT) 

## Testing 
Just run the code many times, and answer differently each time! 

## LINK TO REPOSITORY AND VIDEO WALKTHROUGH

You can access my code in this repository:
https://github.com/pvlln/oop-logo-maker

![WALKTHROUGH VIDEO](./logo-maker-walkthrough.mov)

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

