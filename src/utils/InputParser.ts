import { Direction } from '../models/Direction.js';
import { Table } from '../models/Table.js';

export type Command = 
  | { type: 'MOVE' }
  | { type: 'LEFT' }
  | { type: 'RIGHT' };

export interface ParsedInput {
  table: Table;
  initialRow: number;
  initialCol: number;
  initialDirection: Direction;
  commands: Command[];
}

export function parseInput(input: string): ParsedInput | null {
  const lines = input.trim().split('\n').map(line => line.trim()).filter(line => line.length > 0);
  if (lines.length < 3) return null;

  const firstLine = lines[0];
  if (firstLine === undefined) return null;
  
  const tableParts = firstLine.split(/\s+/);
  if (tableParts.length !== 2) return null;
  
  const rowsStr = tableParts[0];
  const colsStr = tableParts[1];
  if (rowsStr === undefined || colsStr === undefined) return null;

  const rows = parseInt(rowsStr, 10);
  const cols = parseInt(colsStr, 10);
  if (isNaN(rows) || isNaN(cols)) return null;

  const line1 = lines[1];
  if (line1 === undefined) return null;
  
  const robotParts = line1.split(/\s+/);
  if (robotParts.length !== 3) return null;
  
  const rowStr = robotParts[0];
  const colStr = robotParts[1];
  const dirStr = robotParts[2];
  if (rowStr === undefined || colStr === undefined || dirStr === undefined) return null;

  const initialRow = parseInt(rowStr, 10);
  const initialCol = parseInt(colStr, 10);
  const initialDirection = parseDirection(dirStr);
  if (isNaN(initialRow) || isNaN(initialCol) || initialDirection === null) return null;

  const commandsLine = lines[2];
  if (commandsLine === undefined) return null;
  
  const commands: Command[] = [];
  for (const char of commandsLine) {
    switch (char.toUpperCase()) {
      case 'M': commands.push({ type: 'MOVE' }); break;
      case 'L': commands.push({ type: 'LEFT' }); break;
      case 'R': commands.push({ type: 'RIGHT' }); break;
    }
  }

  return {
    table: new Table(rows, cols),
    initialRow,
    initialCol,
    initialDirection,
    commands,
  };
}

function parseDirection(str: string): Direction | null {
  switch (str.toUpperCase()) {
    case 'N': case 'NORTH': return Direction.NORTH;
    case 'E': case 'EAST': return Direction.EAST;
    case 'S': case 'SOUTH': return Direction.SOUTH;
    case 'W': case 'WEST': return Direction.WEST;
    default: return null;
  }
}
