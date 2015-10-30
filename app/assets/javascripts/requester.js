'use strict';

class RequesterSingleton {

  post(route, params) {
    var request = new XMLHttpRequest();
    request.open('POST', RouteConstants.students.create);
    request.onreadystatechange = function() {
      // TODO(Warren): Complete this callback function.
      console.log(request.responseText);
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(params));
  }
}

var Requester = new RequesterSingleton();
