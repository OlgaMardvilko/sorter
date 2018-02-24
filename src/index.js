class Sorter {
  constructor() {
    this.elements = [];
    this.compare;
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
    let compareNumber = (a,b) => (a - b);
    let compareFunc = this.compare ? this.compare : compareNumber;

    for (let i=0; i<indices.length; i++) {
      arr.push(this.elements[indices[i]]);
    }
    
    indices.sort(compareNumber); 
    arr.sort(compareFunc);

    for (let i=0; i<arr.length; i++) {
      this.elements[indices[i]] = arr[i];
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;