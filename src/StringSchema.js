export default class StringSchema {
    constructor(validators) {
      this.validators = [...validators];
    }
  
    isValid(value) {
      return this.validators.every((validator) => validator(value));
    }

    hasSpaces() {
        const validator = (value) => value.includes(' ');
        return new StringSchema([...this.validators, validator]);
      }
  }