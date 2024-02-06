const { writeFile } = require('fs').promises;
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const path = require('path');
const inquirer = require('inquirer');

function promptUser() {
  inquirer
    .prompt([
      {
        name: "text",
        type: "input",
        message: "Select 3 letters for logo",
        validate: (text) => text.length <= 3 || "Do not exceed 3 letters",
      },
      {
        name: "textColor",
        type: "input",
        message: "What color will your 3 letters be?",
      },
      {
        name: "shape",
        type: "list",
        message: "Select your shape",
        choices: ["circle", "triangle", "square"],
      },
      {
        name: "shapeColor",
        type: "input",
        message: "What color will your shape be?",
      },
    ])
    .then(({ text, textColor, shape, shapeColor }) => {
      let shapeClass = Circle;
      if (shape.toLowerCase() === 'triangle') {
        shapeClass = Triangle;
      } else if (shape.toLowerCase() === 'square') {
        shapeClass = Square;
      }

      const shapeInstance = new shapeClass();
      shapeInstance.setColor(shapeColor);

      const svg = new SVG();
      svg.setText(text, textColor);
      svg.setShape(shapeInstance);

      const outputPath = path.join(__dirname, 'examples', 'logo.svg');
      return writeFile(outputPath, svg.render());
    })
    .then(() => {
      console.log("Generated logo.svg!");
    })
    .catch((error) => {
      console.log(error);
      console.log("Oops! Something went wrong.");
    });
}

promptUser();



