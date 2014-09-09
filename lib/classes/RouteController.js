var Class = require('gozen').Class,
  extend = require('util')._extend,
  EventController = require('./EventController');

function executeInContext(method, context) {
  return function(req, res, next) {
    context.req = req;
    context.res = res;
    context.next = next;
    var params = extend(req.body || {}, req.params || {});
    params = extend(params, req.query || {});

    method.apply(context, [params]);
  };
}

var RouteController = new Class({
  init: function(app) {
    this.app = app;
    for (var route in this.routes) {
      var routeMap = route.split(' ');
      var method = app[routeMap[0].toLowerCase()] || app.get;
      method.apply(app, [routeMap[1], executeInContext(this.routes[route], this)]);
    }
  }
});

module.exports = RouteController;