import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service }
} = Ember;

export default Controller.extend({
  i18n: service(),

  actions: {
    setName(name) {
      let model = get(this, 'model');
      model.set('name', name);
    },

    setAge(age) {
      let model = get(this, 'model');
      model.set('age', age);
    },

    setLocale(value) {
      this.set('i18n.locale', value);
    }
  }
});
