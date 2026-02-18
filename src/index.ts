import * as fs from 'fs';
import { Simulator } from './services/Simulator.js';

function main(): void {
  const inputPath = 'input.txt';
  
  let input: string;
  try {
    input = fs.readFileSync(inputPath, 'utf-8');
  } catch (err) {
    console.error(`Error reading input file: ${inputPath}`);
    console.error('Make sure input.txt exists in the project root.');
    process.exit(1);
  }

  const simulator = new Simulator();
  const output = simulator.runFromInput(input);

  console.log(output);
}

main();
