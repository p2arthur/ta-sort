import { NumberCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumberCollection) {}

  //Bubble sort
  public sortCollection(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const shouldSwap = this.collection.compare(j, j + 1);
        if (shouldSwap) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
