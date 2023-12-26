export default class FunctionSchema {
    constructor(validators, context = {}, expectedValue = null) {
      this.validators = validators;
      this.context = context;
      this.expectedValue = expectedValue;

    }
  
    isValid(value) {
      if (!this.expectedValue) {
        return this.validators.every((validator) => validator(value) === true);
      }
      return value.call(this.context,) === this.expectedValue;
    }
  
    expect(value) {
      return new FunctionSchema(this.validators, this.context, value);
    }
  
    callWith(context) {
      return new FunctionSchema(this.validators, context, this.expectedValue,);
    }
  
  }