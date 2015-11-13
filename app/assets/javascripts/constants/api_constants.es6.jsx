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
      update: function(id) {
        return `/api/students/${id}`;
      },
    };
  }

  get users() {
    return {
      create: '/api/users/signup',
      login: '/api/users/login',
      logout: '/api/users/logout',
      signout: '/api/users/signout',
    };
  }
}

var ApiConstants = new ApiSingleton();
