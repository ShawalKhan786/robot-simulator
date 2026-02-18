// Table boundaries for robot movement
export class Table {
  constructor(
    public readonly rows: number = 5,
    public readonly cols: number = 5
  ) {}

  isValidPosition(row: number, col: number): boolean {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }
}
