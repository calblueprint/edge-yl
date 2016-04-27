(() => {
  class Requester {

    csv(route, type) {
      var request = this.initialize('GET', route, 'text/csv');
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            var a = document.createElement('a');
            var encoding = 'data:attachment/csv';
            a.href = `${encoding}, ${encodeURIComponent(request.response)}`;
            a.target = '_blank';
            a.download = `${type}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        }
      };
      request.send();
    }

    delete(route, resolve, reject) {
      var request = this.initialize('DELETE', route);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200 && resolve) {
            resolve(JSON.parse(request.response));
          } else if (request.status === 204 && resolve) {
            resolve();
          }
        }
      };
      request.send();
    }

    get(route, resolve, reject) {
      var request = this.initialize('GET', route);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200 && resolve) {
            resolve(JSON.parse(request.response));
          }
        }
      };
      request.send();
    }

    initialize(type, route, content='application/json') {
      var request = new XMLHttpRequest();
      request.open(type, route);
      request.setRequestHeader('Accept', content);
      request.setRequestHeader('Content-Type', content);
      request.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      return request;
    }

    post(route, params, resolve, reject) {
      var request = this.initialize('POST', route);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 201 && resolve) {
            resolve(JSON.parse(request.response));
          } else if (reject) {
            reject(JSON.parse(request.response));
          }
        }
      };
      request.send(JSON.stringify(params));
    }

    update(route, params, resolve, reject) {
      var request = this.initialize('PATCH', route);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 201 && resolve) {
            resolve(JSON.parse(request.response));
          } else if (reject) {
            reject(JSON.parse(request.response));
          }
        }
      };
      request.send(JSON.stringify(params));
    }

    upload(route, data, resolve, reject) {
      $.ajax({
        data : data,
        contentType: false,
        processData: false,
        success: resolve,
        type : 'POST',
        url : route,
      });
    }
  }
  this.Requester = new Requester();
})();
