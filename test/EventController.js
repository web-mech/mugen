var expect = require('chai').expect;
var Class = require('ee-class');
var EventController = require('../lib/classes/EventController');


var FooController = new Class({
  inherits: EventController,
  events: {
    'Model.User': function() {
      
    }
  }
});

describe('EventController', function() {
  it('Should do stuff', function() {
    var ctrl = new FooController();
    ctrl.emit('foo');
  });
});