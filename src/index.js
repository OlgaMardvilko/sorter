class Sorter {
  constructor() {
    this.elements = [];
  }

  add(element) {
   return this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;