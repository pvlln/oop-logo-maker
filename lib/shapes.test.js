const {
    Triangle,
    Circle,
    Rectangle} = require('./shapes');

const fill = 'blue';
const text = 'PV';
const textFill = 'white';

describe('Triangle', () =>{
    describe('render', () => {
        it('should return an svg file with a triangle', () => {
            const svgTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${fill}"></polygon><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text></svg>`;
            const triangle = new Triangle(fill,text,textFill);
            expect(triangle.render()).toEqual(svgTriangle);
        });
    });
});

describe('Rectangle', () => {
    describe('render', () => {
        it('should return an svg file with a rectangle', () => {
            const svgRectangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="100" width="150" height="100" fill="${fill}"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text></svg>`;
            const rectangle = new Rectangle(fill,text,textFill);
            expect(rectangle.render()).toEqual(svgRectangle);
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should return an svg file with a circle', () => {
            const svgCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${fill}"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text></svg>`;
            const circle = new Circle(fill,text,textFill);
            expect(circle.render()).toEqual(svgCircle);
        });
    });
});
// var shape1 = new Triangle('blue', 'PV', 'white');
// expect(shape1.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PV</text></svg>`);

// var shape2 = new Rectangle('blue', 'PV', 'white');
// expect(shape2.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="100" width="150" height="100" fill="blue"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PV</text></svg>`);

// var shape3 = new Circle('blue', 'PV', 'white');
// expect(shape3.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PV</text></svg>`);