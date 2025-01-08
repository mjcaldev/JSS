// now lets take that logic from main.js and make it even more scalable
const inputs = document.querySelectorAll('.controls input');

let clicked = false;

function addEventListeners(elements, events) {
  events.forEach(({ type, listener }) => {
    elements.addEventListener(type, listener);
  });
}

const eventHandlers = {
  handleMouseDown: () => {
    clicked = true;
    console.log("Mouse down. Clicked:", clicked);
  },
  handleMouseUp: () => {
    clicked = false;
    console.log("Mouse down. Clicked:", clicked);
  },
  handleChange: function () {
    console.log(`Changed: ${this.value}`);
  },
  handleMouseMove: function (event) {
    if (clicked) {
      console.log(`Mouse moving over ${this.name} at (${event.clientX}, ${event.clientY})`);
    }
  }
};

inputs.forEach(input => {
  addEventListener(input, [
    { type: 'mousedown', listener: eventHandlers.handleMouseDown },
    { type: 'mouseup', listener: eventHandlers.handleMouseUp },
    { type: 'change', listener: eventHandlers.handleChange },
    { type: 'mousemove', listener: eventHandlers.handleMouseMove }
  ]);
});

