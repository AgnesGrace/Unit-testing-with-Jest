# Jest & TypeScript Testing Suite

This repository demonstrates how to write unit tests using Jest and TypeScript. The code covers various utility functions, authentication logic, parameterized testing, error handling, and code coverage examples.

## Features

- **Unit Testing**: Functions like `product`, `usernameLowerCase`, and `authenticateUser` are tested.
- **Parameterized Testing**: Tests multiple scenarios in one test case using `it.each()`.
- **Error Handling**: Validates cases where inputs may be invalid (e.g., empty usernames).
- **Test-Driven Development (TDD)**: Demonstrates writing tests before implementing functionality.
- **Code Coverage**: Full test coverage is ensured across critical logic paths.

## Tested Functions

- **product(a, b)**: Returns the product of two numbers.
- **usernameLowerCase(input)**: Converts a username to lowercase.
- **authenticateUser(username, password)**: Authenticates a user and returns their information.

## Example Tests

- **Product Tests**
  - Calculates the product of two numbers.
  - Handles multiple input scenarios using parameterized testing.
- **Username Lowercase Tests**

  - Converts usernames to lowercase correctly.
  - Uses parameterized tests for multiple inputs.

- **Authentication Tests**
  - Returns user information, including username in lowercase and authenticated status.
  - Validates user details and checks array content.
  - Error handling for invalid usernames.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 12.x)
- **TypeScript** (>= 4.x)
- **Jest** (>= 27.x)

### Installation & Running Tests

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run all tests:

npm test
