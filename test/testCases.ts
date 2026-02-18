import { Simulator } from '../src/services/Simulator.js';

function assertEqual(actual: string, expected: string, testName: string): void {
  if (actual === expected) {
    console.log(`✓ ${testName}`);
  } else {
    console.error(`✗ ${testName}`);
    console.error(`  Expected: ${expected}`);
    console.error(`  Actual: ${actual}`);
  }
}

function runTests(): void {
  console.log('Running Robot Simulator Tests...\n');

  const tests = [
    { input: '5 5\n1 2 S\nMRMLM', expected: '3 1 S', name: 'Example 1' },
    { input: '5 4\n1 2 N\nLMLMMRMMLRM', expected: '3 0 W', name: 'Example 2' },
    { input: '5 5\n0 0 N\nM', expected: '0 0 N', name: 'Robot at edge' },
    { input: '5 5\n0 0 N\nR', expected: '0 0 E', name: 'Rotate right' },
    { input: '5 5\n0 0 N\nL', expected: '0 0 W', name: 'Rotate left' },
    { input: '5 5\n0 0 N\nRRRR', expected: '0 0 N', name: 'Full rotation' },
    { input: '5 5\n0 0 E\nM', expected: '0 1 E', name: 'Move east' },
    { input: '5 5\n0 0 S\nM', expected: '1 0 S', name: 'Move south' },
    { input: '5 5\n0 1 W\nM', expected: '0 0 W', name: 'Move west' },
  ];

  tests.forEach((test, index) => {
    const simulator = new Simulator();
    const output = simulator.runFromInput(test.input);
    console.log(`Test ${index + 1}: ${test.name}`);
    console.log(`  Output: ${output}`);
    assertEqual(output, test.expected, test.name);
    console.log('');
  });

  console.log('Tests complete!');
}

runTests();
