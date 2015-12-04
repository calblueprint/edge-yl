(() => {
  class ApiConstants {

    get conferences() {
      return {
        groups: {
          show: function(conferenceId, id) {
            return `/api/conferences/${conferenceId}/groups/${id}`
          },
          update: function(conferenceId, id) {
            return `/api/conferences/${conferenceId}/groups/${id}`
          },
        }
        create: '/api/conferences',
        index: '/api/conferences',
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
        index: '/api/users',
        login: '/api/users/login',
        logout: '/api/users/logout',
        profile: '/api/users/profile',
        show: function(id) {
          return `/api/users/${id}`;
        },
        signout: '/api/users/signout',
      };
    }
  }
  this.ApiConstants = new ApiConstants();
})();
