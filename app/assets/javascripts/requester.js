'use strict';

class RequesterSingleton {

  post(params={ hello: 'world' }) {
    function reqListener() {
      console.log(this.responseText);
    }

    var request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);
    request.open("POST", RouteConstants.students.create);
    request.send(params);
  }
}

car Requester = new RequesterSingleton();
