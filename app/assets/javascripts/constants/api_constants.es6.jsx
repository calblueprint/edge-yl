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
        groups: (id) => `/api/groups/${id}.csv`,
        schools: '/api/schools.csv',
        students: '/api/students.csv',
      };
    }

    get drafts() {
      return {
        create: '/api/drafts',
        show: (id) => `/api/drafts/${id}`,
      };
    }

    get emails() {
      return {
        index: '/api/emails',
        show: (id) => `/api/emails/${id}`,
        update: 'api/emails',
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
        index: (conference_id) => `/api/groups?conference_id=${conference_id}`,
        show: (id) => `/api/groups/${id}`,
        update: (id) => `/api/groups/${id}`,
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
        create: '/api/rooms',
        show: (id) => `/api/rooms/${id}`,
        index: (conference_id) => {
          return `/api/rooms?&conference_id=${conference_id}`;
        },
        update: (id) => `/api/rooms/${id}`,
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
        index: (page, query={}) => {
          var route = `/api/students?page=${page}`;
          Object.keys(query).map((key) => {
            route = `${route}&${key}=${query[key]}`
          });
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
