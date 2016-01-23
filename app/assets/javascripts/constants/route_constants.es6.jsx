(() => {
  class RouteConstants {

    get conferences() {
      return {
        index: (page) => `/conferences?page=${page ? page : 1}`,
        show: (id) => `/conferences/${id}`,
      };
    }

    get emails() {
      return {
        index: '/emails',
      };
    }

    get forms() {
      return {
        student: '/forms/1',
      };
    }

    get groups() {
      return {
        index: '/groups',
        show: (id) => `/groups/${id}`,
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
        index: (page=1, query={}) => {
          var route = `/rooms?page=${page}`;
          console.log('RouteConstants: ', query)
          if (query['conference_id']) {
            route = `${route}&?conference_id=${query['conference_id']}`;
          }
          return route;
        },
        show: (id) => `/rooms/${id}`,
      };
    }

    get schools() {
      return {
        index: (page) => `/schools?page=${page ? page : 1}`,
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
        index: (page) => `/users?page=${page ? page : 1}`,
        show: (id) => `/users/${id}`,
      };
    }
  }
  this.RouteConstants = new RouteConstants();
})();
