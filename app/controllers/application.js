import Ember from 'ember';

const {
  Controller,
  get
} = Ember;

export default Controller.extend({

  actions: {
    setName(name) {
      let model = get(this, 'model');
      model.set('name', name);
    },

    setAge(age) {
      let model = get(this, 'model');
      model.set('age', age);
    }
  }
});
