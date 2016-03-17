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
        preview: (target, id) => `/forms/${target}/${id}/preview`,
        school: (page, id) => `/forms/school/${id}?page=${page}`,
        start: {
          school: `/forms/school`,
          student: `/forms/student`,
        },
        student: (page, id) => `/forms/student/${id}?page=${page}`,
        success: (target, id) => `/forms/${target}/${id}/success`,
      };
    }

    get groups() {
      return {
        show: (id) => `/groups/${id}`,
      };
    }

    get pages() {
      return {
        feedback: '/feedback',
        import: '/import',
        login: '/login',
        signup: '/signup',
        profile: '/profile',
      };
    }

    get partial_schools() {
      return {
        index: (page=1) => `/partial_schools?page=${page}`,
      };
    }

    get rooms() {
      return {
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
        index: (conferenceId=1, page=1, query={}) => {
          var route = `/students?conference_id=${conferenceId}&page=${page}`;
          Object.keys(query).map((key) => {
            if (key !== 'conference_id') {
              route = `${route}&${key}=${query[key]}`
            }
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
