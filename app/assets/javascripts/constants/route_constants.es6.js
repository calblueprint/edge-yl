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

  get schools() {
    return {
      index: '/schools',
      show: function(id) {
        return `/schools/${id}`;
      }
    }
  }
  
  get students() {
    return {
      index: '/students',
      show: function(id) {
        return `/students/${id}`;
      },
    };
  }
}

var RouteConstants = new RoutesSingleton();
