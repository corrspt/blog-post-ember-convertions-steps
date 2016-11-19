import Ember from 'ember';

const {
  Component,
  inject: { service },
  computed,
} = Ember;

export default Component.extend({
  i18n: service(),

  attribute: '',

  getTranslation(property) {
    return this.get('i18n').t(`model.${this.get('modelName')}.${this.get('attribute')}.${property}`);
  },

  modelName: computed.alias('model.constructor.modelName'),

  helpText: computed('i18n.locale', function() {
    return this.getTranslation('help').toString();
  }),

  label: computed('i18n.locale', function() {
    return this.getTranslation('label').toString();
  }),

  hasHelp: computed('helpText', function() {
    return this.get('helpText').length > 0;
  }),

  placeholder: computed('i18n.locale', function() {
    return this.getTranslation('placeholder').toString();
  })

});
