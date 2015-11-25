(() => {
  class ApiConstants {

    get schools() {
      return {
        create: '/api/schools',
        index: function(page) {
          return `/api/schools?page=${page}`;
        },
        show: function(id) {
          return `/api/schools/${id}`;
        },
      };
    }

    get searchables() {
      return {
        search: function(query) {
          return `/api/searchables/search?query=${query}`;
        },
      }
    }

    get students() {
      return {
        comments: {
          create: function(id) {
            return `/api/students/${id}/comments`;
          },
          index: function(id) {
            return `/api/students/${id}/comments`;
          },
        },
        create: '/api/students',
        index: function(page) {
          return `/api/students?page=${page}`;
        },
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
        index: '/api/users',
        login: '/api/users/login',
        logout: '/api/users/logout',
        me: '/api/users/me',
        signout: '/api/users/signout',
      };
    }
  }
  this.ApiConstants = new ApiConstants();
})();
