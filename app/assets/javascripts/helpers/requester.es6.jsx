(() => {
  class Requester {

    delete(route, resolve, reject) {
      var request = this.initialize('DELETE', route);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 204) {
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
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            if (resolve) {
              resolve(JSON.parse(request.response));
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
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 201) {
            if (resolve) {
              resolve(JSON.parse(request.response));
            }
          } else if (request.status === 401 || request.status === 422) {
            if (reject) {
              reject(JSON.parse(request.response));
            }
          }
        }
      };
      request.send(JSON.stringify(params));
    }

    update(route, params, resolve, reject) {
      var request = this.initialize('PATCH', route);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 201) {
            if (resolve) {
              resolve(JSON.parse(request.response));
            }
          } else if (request.status === 401 || request.status === 422) {
            if (reject) {
              reject(JSON.parse(request.response));
            }
          }
        }
      };
      request.send(JSON.stringify(params));
    }
  }
  this.Requester = new Requester();
})();
