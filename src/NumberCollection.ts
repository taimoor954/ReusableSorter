import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super()
    this.data = data;
  }
  get length(): number {
    return this.data.length;
  }

  //to decide if we need to swap or not
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  //to swap
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
    
}
}
