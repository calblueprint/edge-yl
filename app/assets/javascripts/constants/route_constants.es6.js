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
      show: function(id) {
        return `/students/${id}`;
      },
    };
  }

  get blueprint() { 
    return { 
      home: 'http://www.calblueprint.org/',
    }
  };
}

var RouteConstants = new RoutesSingleton();
