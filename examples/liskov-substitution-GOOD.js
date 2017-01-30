function makeShape() {
  function setColor(color) {
    // ...
  }

  function render(area) {
    // ...
  }

  return {
    setColor,
    render
  };
}

function makeRectangle(width, height) {
  let shape = makeShape();
  shape.getArea = () => width * height;

  return shape;
}

function makeSquare(length) {
  let shape = makeShape();
  shape.getArea = () => length * length;

  return shape;
}

function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [makeRectangle(3, 4), makeRectangle(4, 5), makeSquare(4)];
renderLargeShapes(shapes);
