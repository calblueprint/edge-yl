'use strict';

class RequesterSingleton {

  delete(route, resolve, reject) {
    var request = this.initialize('DELETE', route);
    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 204) {
          console.log('hello');
          if (resolve) {
            resolve();
          }
        }
      }
    };
    request.send();
  }

  initialize(type, route) {
    var request = new XMLHttpRequest();
    request.open(type, route);
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    return request;
  }

  post(route, params, resolve, reject) {
    var request = this.initialize('POST', route);
    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        switch (this.status) {
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
    request.send(JSON.stringify(params));
  }
}

var Requester = new RequesterSingleton();
