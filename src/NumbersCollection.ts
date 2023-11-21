export class NumberCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    const rightHand = this.data[rightIndex];
    this.data[leftIndex] = rightHand;
    this.data[rightIndex] = leftHand;
  }
}
