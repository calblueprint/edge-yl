(() => {
  class ApiConstants {

    get conferences() {
      return {
        create: '/api/conferences',
        index: function(page) {
          return `/api/conferences?page=${page}`;
        },
        show: function(id) {
          return `/api/conferences/${id}`;
        },
        update: function(id) {
          return `/api/conferences/${id}`;
        },
      };
    }

    get groups() {
      return {
        create: '/api/groups',
        index: '/api/groups',
        show: function(id) {
          return `/api/groups/${id}`;
        },
      };
    }

    get forms() {
      return {
        show: function(id) {
          return `/api/forms/${id}`;
        },
      };
    }

    get schools() {
      return {
        create: '/api/schools',
        index: function(page) {
          return `/api/schools?page=${page}`;
        },
        show: function(id) {
          return `/api/schools/${id}`;
        },
        update: function(id) {
          return `/api/schools/${id}`;
        },
      };
    }

    get searchables() {
      return {
        search: function(query) {
          return `/api/searchables/search?query=${query}`;
        },
      };
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
        index: function(page) {
          return `/api/users?=${page}`;
        },
        login: '/api/users/login',
        logout: '/api/users/logout',
        profile: '/api/users/profile',
        show: function(id) {
          return `/api/users/${id}`;
        },
        signout: '/api/users/signout',
        update: function(id) {
          return `/api/users/${id}`;
        },
      };
    }
  }
  this.ApiConstants = new ApiConstants();
})();
