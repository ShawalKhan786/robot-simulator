import { Robot } from '../models/Robot.js';
import { Table } from '../models/Table.js';
import { Command, parseInput, ParsedInput } from '../utils/InputParser.js';

export class Simulator {
  private robot: Robot;
  private output: string = '';

  constructor(table: Table = new Table()) {
    this.robot = new Robot(table);
  }

  runFromParsedInput(parsed: ParsedInput): string {
    this.robot = new Robot(parsed.table);
    this.robot.place(parsed.initialRow, parsed.initialCol, parsed.initialDirection);
    
    for (const command of parsed.commands) {
      this.executeCommand(command);
    }
    return this.robot.report() ?? '';
  }

  runFromInput(input: string): string {
    const parsed = parseInput(input);
    if (parsed === null) return '';
    return this.runFromParsedInput(parsed);
  }

  private executeCommand(command: Command): void {
    switch (command.type) {
      case 'MOVE': this.robot.move(); break;
      case 'LEFT': this.robot.left(); break;
      case 'RIGHT': this.robot.right(); break;
    }
  }

  getRobot(): Robot {
    return this.robot;
  }
}
