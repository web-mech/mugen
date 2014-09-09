var Class = require('ee-class'),
  EventEmitter = require('events').EventEmitter;

var EventController = new Class({
  inherits: EventEmitter,
  init: function() {
    for(var event in this.events) {
      this.on(event, this.events[event].bind(this));
    }
  }
});

module.exports = EventController;