class Sorter {
  constructor() {
    this.elements = [];
  
  }

  add(element) {
   this.elements.push(element);
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
    let arr = [];
    for (let i =0; i<indices.length; i++){
      arr.push(this.elements[indices[i]]);
    }
    arr.sort();
    for (let i =0; i<arr.length; i++){
      this.elements[indices[i]] = arr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;