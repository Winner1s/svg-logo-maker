class shape {
    constructor() { 
    this.colors = ''
}
setColor(color) {
    this.color = color;
}
}

class Circle extends shape {
    render() {
      return `<circle cx="150" cy="110" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends shape {
    render() {
      return `<rect x="85" y="40" width="140" height="140" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };