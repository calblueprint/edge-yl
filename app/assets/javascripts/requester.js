'use strict';

class RequesterSingleton {

  post(route, params, resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('POST', route);
    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        switch (this.status) {
          case 200:
            return console.log('GET resolved!');
          case 201:
            if (resolve) {
              resolve(JSON.parse(this.response));
            }
            return console.log('POST resolved!');
          case 401:
            if (reject) {
              reject(this.response);
            }
            return console.log('POST rejected!');
        }
      }
    };
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    request.send(JSON.stringify(params));
  }

  delete(route) {
    var request = new XMLHttpRequest();
    request.open('DELETE', route);
    request.onreadystatechange = function() {
      // TODO(Warren): Complete this callback function.
      console.log(request.responseText);
    };
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    request.send();
  }
}

var Requester = new RequesterSingleton();
