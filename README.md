# Belgian National Id validator

Utility that allows you to validate the Belgian National Id

## Installation

Install the package via `npm`:

```bash
npm install --save belgian-national-id-validator
```

## Usage

### ES2016+

```js
import { isValid } from "belgian-national-id-validator";

// Before 2000
isValid("75.12.05-137.14"); // true
isValid("75120513714"); // true

// After 2000
isValid("09.08.24-282.48"); // true
isValid("09082428248"); // true

// Invalid format
isValid("1111111"); // false
```

### ES5

```js
const belgianNationalIdValidator = require("belgian-national-id-validator");

// Before 2000
belgianNationalIdValidator.isValid("75.12.05-137.14"); // true
belgianNationalIdValidator.isValid("75120513714"); // true

// After 2000
isValid("09.08.24-282.48"); // true
belgianNationalIdValidator.isValid("09082428248"); // true

// Invalid format
belgianNationalIdValidator.isValid("1111111"); // false
```

## Tests

To run the tests for this module:

```
npm test
```

## Docs

- Belgian national id validation https://en.wikipedia.org/wiki/Belgian_identity_card

## License

[MIT](LICENSE)
