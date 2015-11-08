'use strict';

class ApiSingleton {

  get schools() {
    return {
      create: '/api/schools',
      index: '/api/schools',
      show: function(id) {
        return `/schools/${id}`;
      },
    };
  }

  get students() {
    return {
      create: '/api/students',
      index: '/api/students',
      show: function(id) {
        return `/api/students/${id}`;
      },
    };
  }
}

var ApiConstants = new ApiSingleton();
