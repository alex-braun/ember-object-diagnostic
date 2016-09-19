import Ember from 'ember';

const Cart = Ember.Object.extend({
  orders: null,
  addToCart: function(item) {
    this.get('orders').pushObject(item);
  },
  totalPrice: Ember.computed.sum('orders'),
});

export default Ember.Route.extend({
});
