# @SynapseTech/snowflake
A pure NodeJS implementation of the Twitter Snowflake
algorithm. Makes use of modern NodeJS `BigInt`. Most
of the code is based off of [leodutra/simpleflakes](https://github.com/leodutra/simpleflakes),
however the `bn.js` dependency has been removed in
favor of the `BigInt` implementation in modern NodeJS,
therefore this module will **NOT** work on older
versions of NodeJS that do not have `BigInt`. This is
to reduce dependency weight in Synapse Technologies
products.

On an additional note, the API is also different from
the original code.

## API
### `snowflake(ts: number = Date.now(), randomBits: number, epoch: number = Date.UTC(2021, 0, 1)): BigInt`
**Parameters:**

| Name         | Type     | Default                | Required | Description                                                                                        |
| ------------ | -------- | ---------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| `ts`         | `number` | `Date.now()`           | **No**   | The timestamp of this snowflake's creation.                                                        |
| `randomBits` | `number` | **N/A**                | **No**   | Random bits to use. Automatically generated if not specified.                                      |
| `epoch`      | `number` | `Date.UTC(2021, 0, 1)` | **No**   | The base timestamp all snowflakes are based from. Defaults to the Synapse Epoch. (January 1, 2021) |

**Returns:** `BigInt` A `BigInt` of this timestamp.

## Example

```js
// Import the module
const snowflake = require('@synapsetech/snowflake');

// Generate a new snowflake
const flake = snowflake();

// Print it out in base 10
console.log(flake.toString());
```