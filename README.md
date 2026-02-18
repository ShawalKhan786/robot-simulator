# Robot Simulator

A TypeScript implementation of the classic Toy Robot coding challenge, demonstrating Object-Oriented Programming principles and clean code architecture.

## Overview

This application simulates a robot moving on a rectangular table. The robot accepts commands to move forward or rotate, and reports its final position after executing a sequence of commands.

## Features

- Place a robot at a specific position with a given orientation
- Move the robot forward in the direction it's facing
- Rotate the robot 90° left or right
- Boundary detection - robot cannot move off the table
- Configurable table size
- Command sequence processing

## Project Structure

```
robot-simulator/
├── src/
│   ├── index.ts              # Application entry point
│   ├── models/
│   │   ├── Direction.ts      # Direction enum and rotation logic
│   │   ├── Robot.ts          # Robot entity with movement methods
│   │   └── Table.ts          # Table boundary validation
│   ├── services/
│   │   └── Simulator.ts      # Main simulation orchestrator
│   └── utils/
│       └── InputParser.ts    # Input file parser
├── test/
│   └── testCases.ts          # Automated test suite
├── input.txt                 # Sample input file
├── package.json
├── tsconfig.json
└── README.md
```

## Input Format

The program reads from `input.txt`:

```
rows cols
row col direction
commands
```

### Parameters

| Parameter   | Description                                                |
|-------------|------------------------------------------------------------|
| `rows`      | Number of rows in the table (first dimension)             |
| `cols`      | Number of columns in the table (second dimension)         |
| `row`       | Starting row position (0-indexed from top)                |
| `col`       | Starting column position (0-indexed from left)             |
| `direction` | Initial facing direction (N, E, S, or W)                  |
| `commands`  | Sequence of commands (M, L, R)                            |

### Commands

| Command | Description                                      |
|---------|------------------------------------------------|
| **M**   | Move forward one tile in current direction     |
| **L**   | Rotate 90° counter-clockwise (left)            |
| **R**   | Rotate 90° clockwise (right)                   |

### Direction Rotation

- **Left (L)**: N → W → S → E → N
- **Right (R)**: N → E → S → W → N

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

This reads from `input.txt` and outputs the final robot position.

### Running Tests

```bash
npm run test
```

## Example Usage

### Example 1

**Input:**
```
5 5
1 2 S
MRMLM
```

**Output:**
```
3 1 S
```

### Example 2

**Input:**
```
5 4
1 2 N
LMLMMRMMLRM
```

**Output:**
```
3 0 W
```

### Edge Case - Robot at Boundary

**Input:**
```
5 5
0 0 N
M
```

**Output:**
```
0 0 N
```

The robot remains at position (0, 0) facing North, as moving forward would place it off the table.

## Design Principles

### Object-Oriented Design

- **Encapsulation**: Each class has well-defined responsibilities
- **Single Responsibility Principle**: Direction logic, table validation, and robot behavior are separated into distinct modules
- **Separation of Concerns**: Input parsing, simulation logic, and output are independent

### Error Handling

- Invalid commands are silently ignored
- Movement commands that would take the robot off the table are ignored
- Invalid input format returns empty output

## Test Suite

The test suite validates the following scenarios:

| Test Case                           | Input                           | Expected Output |
|--------------------------------------|--------------------------------|-----------------|
| Example 1                            | 5 5, 1 2 S, MRMLM             | 3 1 S           |
| Example 2                            | 5 4, 1 2 N, LMLMMRMMLRM       | 3 0 W           |
| Robot at edge                        | 5 5, 0 0 N, M                 | 0 0 N           |
| Rotate right                         | 5 5, 0 0 N, R                 | 0 0 E           |
| Rotate left                          | 5 5, 0 0 N, L                 | 0 0 W           |
| Full rotation                        | 5 5, 0 0 N, RRRR              | 0 0 N           |
| Move east                            | 5 5, 0 0 E, M                 | 0 1 E           |
| Move south                           | 5 5, 0 0 S, M                 | 1 0 S           |
| Move west                            | 5 5, 0 1 W, M                 | 0 0 W           |

## Contributor

Shawal Khan
