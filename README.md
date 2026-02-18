# Robot Simulator

A TypeScript application that simulates robot movement on a grid using clean architecture and object-oriented design principles.

## Overview

Robot Simulator is a technical implementation of the classic Toy Robot coding challenge. The application simulates a robot moving on a rectangular table, accepting commands to move forward or rotate, and reports its final position after executing a sequence of commands.

## Technologies

- **Language:** TypeScript
- **Runtime:** Node.js
- **Architecture:** Object-Oriented Programming (OOP)

## Features

- Configurable table dimensions (N × M grid)
- Robot placement at specific coordinates with orientation
- Movement commands with boundary validation
- 90° rotation (left/right)
- Automated test suite
- Clean separation of concerns

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

The program reads configuration from `input.txt`:

```
rows cols
row col direction
commands
```

### Parameters

| Parameter   | Type   | Description                                           |
|-------------|--------|-------------------------------------------------------|
| `rows`      | number | Number of rows in the table                          |
| `cols`      | number | Number of columns in the table                      |
| `row`       | number | Starting row position (0-indexed from top)          |
| `col`       | number | Starting column position (0-indexed from left)      |
| `direction` | string | Initial facing direction (N, E, S, or W)            |
| `commands`  | string | Sequence of commands (M, L, R)                      |

### Commands

| Command | Action                                   |
|---------|------------------------------------------|
| **M**   | Move forward one tile in current direction |
| **L**   | Rotate 90° counter-clockwise             |
| **R**   | Rotate 90° clockwise                     |

### Direction Rotation

- **Left (L):** N → W → S → E → N
- **Right (R):** N → E → S → W → N

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

This command reads from `input.txt` and outputs the final robot position.

### Running Tests

```bash
npm run test
```

## Example Usage

### Example 1: Basic Movement

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

### Example 2: Complex Sequence

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

### Example 3: Boundary Constraint

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

The robot remains at position (0, 0) facing North, as moving forward would place it outside the table boundaries.

## Architecture

### Design Principles

| Principle | Implementation |
|-----------|----------------|
| **Encapsulation** | Each class manages its own state and behavior |
| **Single Responsibility** | Direction logic, table validation, and robot behavior are separated |
| **Separation of Concerns** | Input parsing, simulation logic, and output are independent modules |

### Class Responsibilities

| Class | Responsibility |
|-------|----------------|
| `Direction` | Enum and rotation utilities for cardinal directions |
| `Table` | Grid boundary validation and configuration |
| `Robot` | Position tracking, movement, and rotation logic |
| `Simulator` | Orchestrates parsing, execution, and output generation |
| `InputParser` | Parses raw input into structured data |

### Error Handling

- Invalid commands are silently ignored
- Movement commands that would place the robot off the table are blocked
- Malformed input returns an empty string

## Test Suite

The test suite includes 9 comprehensive test cases:

| # | Test Case              | Input                    | Expected Output |
|---|------------------------|-------------------------|-----------------|
| 1 | Example 1              | 5 5, 1 2 S, MRMLM      | 3 1 S           |
| 2 | Example 2             | 5 4, 1 2 N, LMLMMRMMLRM| 3 0 W           |
| 3 | Boundary Constraint   | 5 5, 0 0 N, M          | 0 0 N           |
| 4 | Rotate Right          | 5 5, 0 0 N, R          | 0 0 E           |
| 5 | Rotate Left           | 5 5, 0 0 N, L          | 0 0 W           |
| 6 | Full Rotation         | 5 5, 0 0 N, RRRR      | 0 0 N           |
| 7 | Move East             | 5 5, 0 0 E, M          | 0 1 E           |
| 8 | Move South            | 5 5, 0 0 S, M          | 1 0 S           |
| 9 | Move West             | 5 5, 0 1 W, M          | 0 0 W           |


## Author

Shawal Khan
