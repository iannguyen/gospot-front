import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  actions: {
    depositSkin(data) {
      this.sendAction('depositSkin', data);
    }
  },

  defaultSkins: [
    {
      name: "AK-47: Elite Build",
      price: 0.77
    },
    {
      name: "USP-S: Guardian",
      price: 1.23
    },
    {
      name: "M4A4: Desert Strike",
      price: 4.00
    },
    {
      name: "AWP: Worm God",
      price: 5.00
    },
    {
      name: "M4A1-S: Hyper Beast",
      price: 9.51
    },
    {
      name: "Desert Eagle: Blaze",
      price: 16.12
    }
  ]
});
