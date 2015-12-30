(() => {
  class ApiConstants {

    get comments() {
      return {
        create: '/api/comments',
      };
    }

    get conferences() {
      return {
        groups: {
          show: function(conferenceId, id) {
            return `/api/conferences/${conferenceId}/groups/${id}`
          },
          update: function(conferenceId, id) {
            return `/api/conferences/${conferenceId}/groups/${id}`
          },
        },
        create: '/api/conferences',
        index: (page) => `/api/conferences?page=${page}`,
        show: (id) => `/api/conferences/${id}`,
        update: (id) => `/api/conferences/${id}`,
      };
    }

    get csvs() {
      return {
        students: '/api/students.csv',
      };
    }

    get groups() {
      return {
        create: '/api/groups',
        index: '/api/groups',
        show: (id) => `/api/groups/${id}`,
      };
    }

    get forms() {
      return {
        show: (id) => `/api/forms/${id}`,
      };
    }

    get schools() {
      return {
        create: '/api/schools',
        index: (page) => `/api/schools?page=${page}`,
        show: (id) => `/api/schools/${id}`,
        update: (id) => `/api/schools/${id}`,
      };
    }

    get searchables() {
      return {
        search: (query) => `/api/searchables/search?query=${query}`,
      };
    }

    get students() {
      return {
        create: '/api/students',
        index: function(page, options={}) {
          var route = `/api/students?page=${page}`;
          if (options.order) {
            route = `${route}&order=${options.order}`;
          }
          return route;
        },
        show: (id) => `/api/students/${id}`,
        update: (id) => `/api/students/${id}`,
      };
    }

    get users() {
      return {
        create: '/api/users/signup',
        index: (page) => `/api/users?=${page}`,
        login: '/api/users/login',
        logout: '/api/users/logout',
        profile: '/api/users/profile',
        show: (id) => `/api/users/${id}`,
        signout: '/api/users/signout',
        update: (id) => `/api/users/${id}`,
      };
    }
  }
  this.ApiConstants = new ApiConstants();
})();
