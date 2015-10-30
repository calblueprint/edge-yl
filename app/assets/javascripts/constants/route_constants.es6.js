'use strict';

class RoutesSingleton {

  get blueprint() {
    return {
      home: 'http://www.calblueprint.org/',
    };
  }

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
      create: '/students',
      index: '/students',
      show: function(id) {
        return `/students/${id}`;
      },
    };
  }
}

var RouteConstants = new RoutesSingleton();
