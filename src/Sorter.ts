export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  //Bubble sort
  public sortCollection(collection: Sortable): void {
    const t1 = performance.now();
    const { length } = collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const shouldSwap = collection.compare(j, j + 1);
        if (shouldSwap) {
          collection.swap(j, j + 1);
        }
      }
    }

    const t2 = performance.now();
    console.log(`The function took ${(t2 - t1) / 1000} seconds to run`);
  }
}
