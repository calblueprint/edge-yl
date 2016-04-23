(() => {
  class ApiConstants {

    get comments() {
      return {
        create: '/api/comments',
        delete: (id) => `/api/comments/${id}`,
      };
    }

    get conferences() {
      return {
        assignStudentsToGroups: (id) => {
          return `/api/conferences/assign_students_to_groups?conference_id=${id}`;
        },
        assignStudentsToRooms: (id) => {
          return `/api/conferences/assign_students_to_rooms?conference_id=${id}`;
        },
        create: '/api/conferences',
        index: (page) => `/api/conferences?page=${page}`,
        show: (id) => `/api/conferences/${id}`,
        update: (id) => `/api/conferences/${id}`,
      };
    }

    get contacts() {
      return {
        create: '/api/contacts',
        promote: (id) => `/api/contacts/promote/${id}`,
        update: (id) => `/api/contacts/${id}`,
      };
    }

    get csvs() {
      return {
        students_all: '/api/students.csv',
        group: (id) => `/api/groups/${id}`,
        groups: (conferenceId) => `/api/groups/?conference_id=${conferenceId}`,
        prospects: 'api/prospects.csv',
        room: (id) => `/api/rooms/${id}`,
        rooms: (conferenceId) => `/api/rooms/?conference_id=${conferenceId}`,
        schools: '/api/schools.csv',
        students: (conferenceId, query={}) => {
          var route = `/api/students/?conference_id=${conferenceId}`
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
        index: '/api/drafts',
        send: (id) => `/api/drafts/send/${id}`,
        show: (id) => `/api/drafts/${id}`,
        update: (id) => `/api/drafts/${id}`,
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
        delete: (id) => `/api/groups/${id}`,
        index: (conferenceId) => `/api/groups?conference_id=${conferenceId}`,
        show: (id) => `/api/groups/${id}`,
        update: (id) => `/api/groups/${id}`,
      };
    }

    get imports() {
      return {
        schools: '/api/imports/schools',
        students: '/api/imports/students',
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

    get prospects() {
      return {
        create: '/api/prospects',
        delete: (id) => `/api/prospects/${id}`,
        index: (page) => `/api/prospects?page=${page}`,
        show: (id) => `/api/prospects/${id}`,
        update: (id) => `/api/prospects/${id}`,
      };
    }

    get responsibilities() {
      return {
        update: (id) => `/api/responsibilities/${id}`,
      };
    }

    get rooms() {
      return {
        create: '/api/rooms',
        delete: (id) => `/api/rooms/${id}`,
        show: (id) => `/api/rooms/${id}`,
        index: (conferenceId) => {
          return `/api/rooms?&conference_id=${conferenceId}`;
        },
        update: (id) => `/api/rooms/${id}`,
      };
    }

    get schools() {
      return {
        index: (page) => `/api/schools?page=${page}`,
        show: (id) => `/api/schools/${id}`,
        update: (id) => `/api/schools/${id}`,
      };
    }

    get searchables() {
      return {
        search: (query) => `/api/searchables/search?query=${query}`,
        checkIn: (conferenceId, query) => {
          return `/api/searchables/check_in?conference_id=${conferenceId}`+
                                          `&query=${query}`;
        },
        students: (conferenceId, groupId, query) => {
          return `/api/searchables/students?conference_id=${conferenceId}`+
                                           `&group_id=${groupId}` +
                                           `&query=${query}`;
        },
      };
    }

    get students() {
      return {
        checkIn: (id) => `/api/students/check_in/${id}`,
        checkOut: (id) => `/api/students/check_out/${id}`,
        index: (conferenceId, page, query={}) => {
          var route = `/api/students?conference_id=${conferenceId}&page=${page}`;
          Object.keys(query).map((key) => {
            if (key !== 'conference_id') {
              route = `${route}&${key}=${query[key]}`
            }
          });
          return route;
        },
        show: (id) => `/api/students/${id}`,
        update: (id) => `/api/students/${id}`,
      };
    }

    get submissions() {
      return {
        school: {
          create: '/api/school_submissions',
          show: (id) => `/api/school_submissions/${id}`,
          submit: (id) => `/api/school_submissions/${id}/submit`,
          update: (id) => `/api/school_submissions/${id}`,
        },
        student: {
          create: '/api/student_submissions',
          show: (id) => `/api/student_submissions/${id}`,
          submit: (id) => `/api/student_submissions/${id}/submit`,
          update: (id) => `/api/student_submissions/${id}`,
        },
      };
    }

    get threads() {
      return {
        delete: (id) => `/api/threads/${id}`,
        index: (page) => `/api/threads?page=${page}`,
        show: (id) => `/api/threads/${id}`,
        update: 'api/threads',
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
        schoolables: '/api/users/schoolables',
        show: (id) => `/api/users/${id}`,
        resetPassword: (id) => `/api/users/passwords/reset_password`,
        signout: '/api/users/signout',
        update: (id) => `/api/users/${id}`,
        updatePassword: (id) => `/api/users/password/${id}`,
      };
    }

  }
  this.ApiConstants = new ApiConstants();
})();
