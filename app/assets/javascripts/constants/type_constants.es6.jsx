(() => {
  class TypeConstants {

    get comments() {
      return {
        school: 'comment-school',
        student: 'comment-student',
      };
    }

    get conference() {
      return {
        general: 'conference-general',
        statistic: 'conference-statistic',
      };
    }

    get group() {
      return {
        leadership: 'group-leadership',
        general: 'group-general',
      };
    }

    get groups() {
      return {
        conference: 'group-conference',
        default: 'group-default',
      };
    }

    get icons() {
      return {
        close: 'fa fa-times fa-2x',
        conference: 'fa-building',
        create: 'fa-pencil',
        delete: 'fa-times',
        edit: 'fa-pencil-square-o',
        email: 'fa-envelope',
        expand: 'fa-angle-down',
        group: 'fa-star',
        hamburger: 'fa-bars',
        promote: 'fa-level-up',
        room: 'fa-book',
        save: 'fa-save',
        school: 'fa-university',
        search: 'fa-search',
        settings: 'fa-cog',
        student: 'fa-graduation-cap',
        volunteer: 'fa-user',
      };
    }

    get profile() {
      return {
        general: 'profile-general',
      };
    }

    get room() {
      return {
        general: 'room-general',
      };
    }

    get rooms() {
      return {
        conference: 'room-conference',
        default: 'room-default',
      };
    }

    get school() {
      return {
        contact: 'school-contact',
        general: 'school-general',
      };
    }

    get student() {
      return {
        contact: 'student-contact',
        conference: 'student-conference',
        emergency: 'student-emergency',
        general: 'student-general',
        outreach: 'student-outreach',
      };
    }

    get students() {
      return {
        default: 'students-default',
        group: 'students-group',
        room: 'students-room',
        school: 'students-school',
      };
    }

    get user() {
      return {
        leadership: 'user-leadership',
        general: 'user-general',
      };
    }
  }
  this.TypeConstants = new TypeConstants();
})();
