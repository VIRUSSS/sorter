class Sorter {
  constructor() {
    // your implementation
      this.array = [];
      this.compFunc = (one, two) => one > two;
  }

  add(element) {
      // your implementation
      this.array.push(element);
  }

  at(index) {
      // your implementation
      return this.array[index];
  }

  get length() {
      // your implementation
      return this.array.length;
  }

  toArray() {
      // your implementation
      return this.array;
  }

  sort(indices) {
      // your implementation
      indices.sort();
      let tmpArr = [];
      for (let i = 0; i < indices.length; i++) {
          tmpArr.push(this.array[indices[i]]);
      }

      tmpArr.sort(this.compFunc);

      for (let i = 0; i < indices.length; i++) {
          this.array[indices[i]] = tmpArr[i];
      }
  }

  setComparator(compareFunction) {
    // your implementation
      this.compFunc = compareFunction;
  }
}

module.exports = Sorter;