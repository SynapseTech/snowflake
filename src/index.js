const SNOWFLAKE_EPOCH = Date.UTC(2021, 0, 1);
const UNSIGNED_23BIT_MAX = 8388607; // (Math.pow(2, 23) - 1) >> 0

const SNOWFLAKE_TIMESTAMP_SHIFT = 23n;

module.exports = (ts = Date.now(), randomBits, epoch = SNOWFLAKE_EPOCH) =>
    (BigInt(ts - epoch) << SNOWFLAKE_TIMESTAMP_SHIFT) +
    BigInt(randomBits || Math.round(Math.random() * UNSIGNED_23BIT_MAX));