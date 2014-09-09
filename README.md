Mugen - Tools for building nodejs server apps.
=====

##RouteControllers

###Example:
```
var FooController = new Class({
  inherits: RouteController,
  routes:{
    'GET /foo': function(req, res, next) {
      res.send({a:'bc'});
    }
  }
});
```

##EventControllers

###Example:
```
var FooController = new Class({
  inherits: EventController,
  events: {
    'foo': function() {
      console.log('bar');
    }
  }
});
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