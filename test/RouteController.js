var expect = require('chai').expect;
var Class = require('ee-class');
var express = require('express');
var bodyParser = require('body-parser');
var RouteController = require('../lib/classes/RouteController');
var request = require('request');
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

describe('RouteController', function() {
  var FooController = new RouteController({
    extend: true,
    routes: {
      'GET /foo/:foo/bar/:bar': function(params) {
        this.res.json(params);
      },
      'GET /foo': function(params) {
        this.res.json(params);
      },
      'POST /foo': function(params) {
        this.res.json(params);
      },
      'PUT /foo': function(params) {
        this.res.json(params);
      },
      'DELETE /foo': function(params) {
        this.res.json(params);
      }
    }
  });
  
  new FooController(app);
  app.listen(3000);

  it('Should respond to get requests and parse query params', function(done) {
    request({
      url: 'http://localhost:3000/foo?bar=true',
      json: true
    }, function(err, res, body) {
      expect(body).to.have.property('bar');
      done();
    });
  });

  it('Should respond to get requests and parse url params', function(done) {
    request({
      url: 'http://localhost:3000/foo/1/bar/2',
      json: true
    }, function(err, res, body) {
      expect(body).to.have.property('foo');
      expect(body).to.have.property('bar');
      done();
    });
  });

  it('Should respond to post requests and parse body params', function(done) {
    request({
      url: 'http://localhost:3000/foo',
      method: 'post',
      body: {
        'foo': 'bar'
      },
      json: true
    }, function(err, res, body) {
      expect(body).to.have.property('foo');
      done();
    });
  });

  it('Should respond to put requests and parse params', function(done) {
    request({
      url: 'http://localhost:3000/foo',
      method: 'put',
      body: {
        'foo': 'bar'
      },
      json: true
    }, function(err, res, body) {
      expect(body).to.have.property('foo');
      done();
    });
  });

  it('Should respond to delete requests and parse params', function(done) {
    request({
      url: 'http://localhost:3000/foo',
      method: 'delete',
      body: {
        'foo': 'bar'
      },
      json: true
    }, function(err, res, body) {
      expect(body).to.have.property('foo');
      done();
    });
  });

});