'use strict';

class RequesterSingleton {

  post(route, params) {
    var request = new XMLHttpRequest();
    request.open('POST', RouteConstants.students.create);
    request.onreadystatechange = function() {
      console.log(request.responseText);
    };
    request.setRequestHeader('Accept', 'application/json');
    request.send(params);
  }
}

var Requester = new RequesterSingleton();
