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
        login: '/login',
        signup: '/signup',
        profile: '/profile',
        feedback: '/feedback'
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
        index: (page) => `/students?page=${page ? page : 1}`,
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
