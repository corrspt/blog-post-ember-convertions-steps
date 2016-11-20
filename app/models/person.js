import DS from 'ember-data';
import Validator from '../mixins/model-validator';

const {
  Model,
  attr
} = DS;

export default Model.extend(Validator, {
  name: attr('string'),
  age: attr('number'),

  validations: {
    name: {
      presence: true,
      length: {
        minimum: 4
      }
    },
    age: {
      presence: true,
      numericality: {
        allowBlank: true,
        onlyInteger: true,
        greaterThanOrEqualTo: 18
      }
    }
  }
});
