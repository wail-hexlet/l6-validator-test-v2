import StringSchema from './StringSchema.js';
import FunctionSchema from './FunctionSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }
  function() {
    return new FunctionSchema([(val) => typeof val === 'function']);
  }
}