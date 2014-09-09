Mugen
=====
Tools for building nodejs server apps.

##RouteControllers

###Example:
```
var RouteController = require('mugen').RouteController;

var FooController = new RouteController({
  extend: true,
  routes:{
    'GET /foo': function(params) {
      this.res.send(200);
    }
  }
});
```
Each route delegate has access to res, req, and next via the local scope.


###Testing
```
npm test
```

##Todo

Mugen

Overview
expressjs
Resourceful routing - railwayjs or ?
Route Models - ?
Model Events (mongoose-events)
Inheritance - ee-class
control flow (async)
route filtering - security
Classes
RouteController - base middleware
AsyncController - inherits controller, async mixin
ModelController - waterline mixin
RouteModelController
ModelEventController
CacheController
BaseController - used to build apps


CacheController
this.cache.exec(‘')

ModelController
this.models(‘Foo’).find()

AsyncController
this.waterfall([], this.finish);

EventController
{
  ‘Model.Foo bar’: function(Foo, ev, value){
  this.models(‘Bar’).update(…);

  !this.req && !this.res
  }
}

RouteController
{
  ‘/api/users/:user’:  function(UserId) {
  this.req.params.user
  this.res.send({});
  this.res.json();
  }
}

RouteModelController
{
 ‘/api/users’:  function(users) {
  [user collection]
 },
  ‘/api/users/:user’:  function(user) {
  user._id ==‘1’;
  user.name = ‘john’;
  user.set(‘email’, ‘hello@world.com’);
  user.save();
  this.req.user
  this.res.send(…)
  }
}


control flow
modularity
flexibiity
stability
maintainability