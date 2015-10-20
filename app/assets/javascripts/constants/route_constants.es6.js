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

  get students() {
    return {
      index: '/students',
      show: '/students/1',
    };
  }
}

var RouteConstants = new RoutesSingleton();
