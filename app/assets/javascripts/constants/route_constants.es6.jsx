(() => {
  class RouteConstants {

    get conferences() {
      return {
        index: (page=1) => `/conferences?page=${page}`,
        show: (id) => `/conferences/${id}`,
      };
    }

    get drafts() {
      return {
        show: (id) => `/drafts/${id}`,
      };
    }

    get emails() {
      return {
        index: (page=1) => `/emails?page=${page}`,
        show: (id) => `/emails/${id}`,
      };
    }

    get forms() {
      return {
        school: (page, uuid) => {
          return `/forms/school?page=${page}&uuid=${uuid}`;
        },
        student: (page, uuid) => {
          return `/forms/student?page=${page}&uuid=${uuid}`;
        },
      };
    }

    get groups() {
      return {
        show: (id) => `/groups/${id}`,
        index: (conference_id) => {
          var route = '/groups';
          if (conference_id) {
            route = `${route}?conference_id=${conference_id}`;
          }
          return route;
        },
      };
    }

    get pages() {
      return {
        feedback: '/feedback',
        login: '/login',
        signup: '/signup',
        profile: '/profile',
      };
    }

    get rooms() {
      return {
        index: (conference_id) => {
          var route = '/rooms';
          if (conference_id) {
            route = `${route}?conference_id=${conference_id}`;
          }
          return route;
        },
        show: (id) => `/rooms/${id}`,
      };
    }

    get schools() {
      return {
        index: (page=1) => `/schools?page=${page}`,
        show: (id) => `/schools/${id}`,
      };
    }

    get students() {
      return {
        index: (page, query={}) => {
          var route = `/students?page=${page}`;
          Object.keys(query).map((key) => {
            route = `${route}&${key}=${query[key]}`
          });
          return route;
        },
        show: (id) => `/students/${id}`,
      };
    }

    get users() {
      return {
        index: (page=1) => `/users?page=${page}`,
        show: (id) => `/users/${id}`,
      };
    }
  }
  this.RouteConstants = new RouteConstants();
})();
