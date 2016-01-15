(() => {
  class ApiConstants {

    get comments() {
      return {
        create: '/api/comments',
      };
    }

    get conferences() {
      return {
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

    get emails() {
      return {
        index: '/api/emails',
      };
    }

    get feedbacks() {
      return {
        create: '/api/feedbacks'
      };
    }

    get forms() {
      return {
        show: (id) => `/api/forms/${id}`,
      };
    }

    get groups() {
      return {
        create: '/api/groups',
        show: (id) => `/api/groups/${id}`,
        update: (id) => `api/groups/${id}`,
      };
    }

    get leaderships() {
      return {
        update: (id) => `/api/leaderships/${id}`,
      };
    }

    get profiles() {
      return {
        update: (id) => `/api/profiles/${id}`,
      };
    }

    get rooms() {
      return {
        show: (id) => `/api/rooms/${id}`,
        update: (id) => `/api/rooms/${id}`,
      }
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
        groupables: '/api/users/groupables',
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
