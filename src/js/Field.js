export default class Field {
  constructor() {
    this.fieldSize = 4;
    this.cells = [];
    this.currentIndex;
  }

  init() {
    const tegBody = document.querySelector("body");

    const fieldEl = document.createElement("div");
    fieldEl.classList.add("field");

    for (let i = 0; i < this.fieldSize * this.fieldSize; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      fieldEl.appendChild(cellEl);
    }

    tegBody.appendChild(fieldEl);

    this.cells = Array.from(fieldEl.children);
    setInterval(() => {
      this.moveGoblin();
    }, 500);
  }

  moveGoblin() {
    const randomNumber = Math.floor(
      Math.random() * this.fieldSize * this.fieldSize
    );

    if (!isNaN(this.currentIndex)) {
      this.cells[this.currentIndex].classList.remove("icon");
    }

    if (this.currentIndex !== randomNumber) {
      this.currentIndex = randomNumber;
      this.cells[this.currentIndex].classList.add("icon");
    }
  }
}
