class Shape {
  constructor(type, attr, fillColor, txt, txtColor) {
    this.type = type;
    this.attr = attr;
    this.fillColor = fillColor;
    this.txt = txt;
    this.txtColor = txtColor;
  }
  render() {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${this.type} ${this.attr} fill="${this.fillColor}"></${this.type}>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>   
        </svg>`;
  }
}

class Triangle extends Shape {
  constructor(fillColor, txt, txtColor) {
    const attr = 'points="150, 18 244, 182 56, 182"';
    const type = "polygon";
    super(type, attr, fillColor, txt, txtColor);
  }
}
class Circle extends Shape{
    constructor(fillColor, txt, txtColor) {
        const attr = 'cx="25" cy="75" r="20"';
        const type = "circle";
        super(type, attr, fillColor, txt, txtColor);
      }
}
class Rectangle extends Shape{
    constructor(fillColor, txt, txtColor) {
        const attr = 'x="10" y="10" width="30" height="30"';
        const type = "rect";
        super(type, attr, fillColor, txt, txtColor);
      }
}

module.exports = { Triangle, Circle, Rectangle };
