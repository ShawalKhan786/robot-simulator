import { Direction, rotateLeft, rotateRight, getNextPosition } from './Direction.js';
import { Table } from './Table.js';

export class Robot {
  private row: number | null = null;
  private col: number | null = null;
  private direction: Direction | null = null;
  private placed = false;

  constructor(private table: Table) {}

  place(row: number, col: number, direction: Direction): boolean {
    if (!this.table.isValidPosition(row, col)) return false;
    this.row = row;
    this.col = col;
    this.direction = direction;
    this.placed = true;
    return true;
  }

  move(): boolean {
    if (!this.placed || this.row === null || this.col === null || this.direction === null) return false;

    const nextPos = getNextPosition(this.row, this.col, this.direction, this.table.rows, this.table.cols);
    if (nextPos === null) return false;

    this.row = nextPos.row;
    this.col = nextPos.col;
    return true;
  }

  left(): boolean {
    if (!this.placed || this.direction === null) return false;
    this.direction = rotateLeft(this.direction);
    return true;
  }

  right(): boolean {
    if (!this.placed || this.direction === null) return false;
    this.direction = rotateRight(this.direction);
    return true;
  }

  report(): string | null {
    if (!this.placed || this.row === null || this.col === null || this.direction === null) return null;
    return `${this.row} ${this.col} ${this.direction}`;
  }

  isPlaced(): boolean {
    return this.placed;
  }
}
