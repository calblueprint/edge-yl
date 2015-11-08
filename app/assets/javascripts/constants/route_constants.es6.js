'use strict';

class RoutesSingleton {

  get pages() {
    return {
      login: '/login',
      signup: '/signup',
      profile: '/profile',
      mail: '/mail',
    };
  }

  get schools() {
    return {
      index: '/schools',
      show: function(id) {
        return `/schools/${id}`;
      },
    };
  }

  get students() {
    return {
      create: '/students',
      index: '/students',
      show: function(id) {
        return `/students/${id}`;
      },
    };
  }

  get api_students() {
    return {
      create: '/api/students',
      index: '/api/students',
      show: function(id) {
        return `/api/students/${id}`;
      },
    };
  }

  get users() {
    return {
      create: '/users',
      index: '/users',
      login: '/users/login',
      logout: '/users/logout',
      signout: '/users/signout',
    };
  }
}

var RouteConstants = new RoutesSingleton();
