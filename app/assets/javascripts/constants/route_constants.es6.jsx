(() => {
  class RouteConstants {

    get pages() {
      return {
        login: '/login',
        signup: '/signup',
        profile: '/profile',
        mail: '/mail',
      };
    }

    get schools() {
      return {
        index: '/schools',
        show: function(id) {
          return `/schools/${id}`;
        },
      };
    }

    get students() {
      return {
        index: function(page) {
          if (page) {
            return `/students?page=${page}`;
          } else {
            return '/students';
          }
        },
        show: function(id) {
          return `/students/${id}`;
        },
      };
    }

    get users() {
      return {
        index: '/users',
      };
    }
  }
  this.RouteConstants = new RouteConstants();
})();
