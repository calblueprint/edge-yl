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
      index: function(page) {
        return `/students?page=${page}`;
      },
      show: function(id) {
        return `/students/${id}`;
      },
    };
  }

  get users() {
    return {
      index: '/users',
    };
  }
}

var RouteConstants = new RoutesSingleton();
