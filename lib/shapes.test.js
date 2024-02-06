const { Circle, Triangle, Square } = require('./shapes');
test('Circle renders correctly', () => {
    const circleShape = new Circle();
    circleShape.setColor('blue');
    expect(circleShape.render()).toEqual('<circle cx="150" cy="110" r="80" fill="blue" />');
  });
  
  test('Triangle renders correctly', () => {
    const triangleShape = new Triangle();
    triangleShape.setColor('red');
    expect(triangleShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
  
  test('Square renders correctly', () => {
    const squareShape = new Square();
    squareShape.setColor('green');
    expect(squareShape.render()).toEqual('<rect x="85" y="40" width="140" height="140" fill="green" />');
  });