class Sorter {
  constructor(public collection: number[]) {}

  //Bubble sort
  public sortCollection(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          const rightHand = this.collection[j + 1];
          this.collection[j] = rightHand;
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([4, 2, 1, 3]);

sorter.sortCollection();
console.log(sorter.collection);
