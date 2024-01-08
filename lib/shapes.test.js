const circleshape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="110" r=z"80" fill="' + this.color + '" />');

const triangleshape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const squareshape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="110" r=z"80" fill="' + this.color + '" />');