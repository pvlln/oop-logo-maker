function Shape(type, attr, fillColor, txt, txtColor){
    this.type = type;
    this.attr = attr;
    this.fillColor = fillColor;
    this.txt = txt;
    this.txtColor = txtColor;
    this.render = function() {
        var tag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.type} ${this.attr} fill="${this.fillColor}>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
        </svg>`
    }
}
Shape.prototype.render = function(){

};
class Triangle {

}
class Circle {

}
class Rectangle {

}

modules.export = {Triangle, Circle, Rectangle};