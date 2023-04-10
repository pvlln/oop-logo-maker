const {
    Triangle,
    Circle,
    Rectangle} = require('./shapes');

var shape1 = new Triangle('blue', 'PV', 'white');
expect(shape1.render()).toEqual(`        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PV</text>   
        </svg>`);

var shape2 = new Rectangle('blue', 'PV', 'white');
expect(shape2.render()).toEqual(`        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect points="150, 18 244, 182 56, 182" fill="blue"></rect>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PV</text>   
        </svg>`);

var shape3 = new Circle('blue', 'PV', 'white');
expect(shape3.render()).toEqual(`        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle points="150, 18 244, 182 56, 182" fill="blue"></circle>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PV</text>   
        </svg>`);