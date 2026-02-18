// Cardinal directions for robot orientation
export enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W',
}

// Rotate 90° counter-clockwise
export function rotateLeft(direction: Direction): Direction {
  switch (direction) {
    case Direction.NORTH: return Direction.WEST;
    case Direction.WEST: return Direction.SOUTH;
    case Direction.SOUTH: return Direction.EAST;
    case Direction.EAST: return Direction.NORTH;
  }
}

// Rotate 90° clockwise
export function rotateRight(direction: Direction): Direction {
  switch (direction) {
    case Direction.NORTH: return Direction.EAST;
    case Direction.EAST: return Direction.SOUTH;
    case Direction.SOUTH: return Direction.WEST;
    case Direction.WEST: return Direction.NORTH;
  }
}

// Get next position after moving forward, returns null if off table
export function getNextPosition(
  row: number,
  col: number,
  direction: Direction,
  rows: number,
  cols: number
): { row: number; col: number } | null {
  let newRow = row;
  let newCol = col;

  switch (direction) {
    case Direction.NORTH: newRow -= 1; break;
    case Direction.EAST:  newCol += 1; break;
    case Direction.SOUTH: newRow += 1; break;
    case Direction.WEST:  newCol -= 1; break;
  }

  if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
    return { row: newRow, col: newCol };
  }
  return null;
}
