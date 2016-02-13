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

    get contacts() {
      return {
        create: '/api/contacts',
        update: (id) => `/api/contacts/${id}`,
      };
    }

    get csvs() {
      return {
        group: (id) => `/api/groups/${id}`,
        groups: (conference_id) => `/api/groups/?conference_id=${conference_id}`,
        rooms: (conference_id) => `/api/rooms/?conference_id=${conference_id}`,
        schools: '/api/schools',
        students: (query={}) => {
          var route = '/api/students';
          Object.keys(query).map((key, index) => {
            route = `${route}${index === 0 ? '?' : '&'}`
            route = `${route}${key}=${query[key]}`
          });
          return route;
        },
      };
    }

    get drafts() {
      return {
        create: '/api/drafts',
        show: (id) => `/api/drafts/${id}`,
        update: (id) => `/api/drafts/${id}`,
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
        show: (target) => `/api/forms/${target}`,
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

    get submissions() {
      return {
        create: '/api/submissions',
        show: (uuid) => `/api/submissions/${uuid}`,
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
