import { Lib } from '../src/index'

/**
 * Poor tests, just to get something running with some output in the console.
 */
console.log('Running tests...');

// Test 1
console.log('Testing Lib.log');
Lib.log(">> this is the result of the test. <<")

// Test 2
console.log('Testing Lib.add');
const result = Lib.add(2, 5);
console.assert( result === 2 + 5 );

console.log('Tests done.');