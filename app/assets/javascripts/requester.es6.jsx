'use strict';

class RequesterSingleton {

  delete(route, resolve, reject) {
    var request = this.initialize('DELETE', route);
    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 204) {
          if (resolve) {
            resolve();
          }
        }
      }
    };
    request.send();
  }

  get(route, resolve, reject) {
    var request = this.initialize('GET', route);
    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          if (resolve) {
            resolve(JSON.parse(this.response));
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
        if (this.status === 201) {
          if (resolve) {
            resolve(JSON.parse(this.response));
          }
        } else if (this.status === 401 || this.status === 422) {
          if (reject) {
            reject(JSON.parse(this.response));
          }
        }
      }
    };
    request.send(JSON.stringify(params));
  }

  update(route, params, resolve, reject) {
    var request = this.initialize('PATCH', route);
    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 201) {
          if (resolve) {
            resolve(JSON.parse(this.response));
          }
        }
      }
    };
    request.send(JSON.stringify(params));
  }
}

var Requester = new RequesterSingleton();
