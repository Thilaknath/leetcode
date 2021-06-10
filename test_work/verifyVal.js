const assert = require('assert');
function makeInputVerifier(min, max) {
  assert(min <= max);
  return function(val) {
    if (val < min) {
      return 'Input is less than minimum value';
    } else if (val > max) {
      return 'Input is more than maximum value';
    }
    return 'Input is in range';
  }
}