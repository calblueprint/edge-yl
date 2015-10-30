'use strict';

class RequesterSingleton {

  post(params, route) {
    var request = new XMLHttpRequest();
    request.open("POST", RouteConstants.students.create);
    request.send(params);
  }
}

var Requester = new RequesterSingleton();
