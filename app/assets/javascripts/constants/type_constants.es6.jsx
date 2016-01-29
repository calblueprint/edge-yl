(() => {
  class TypeConstants {

    get actions() {
      return {
        create: 'create',
        edit: 'edit',
      };
    }

    get comment() {
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
        general: 'group-general',
        leadership: 'group-leadership',
      };
    }

    get profile() {
      return {
        credentials: 'profile-credentials',
        general: 'profile-general',
      };
    }

    get room() {
      return {
        conference: 'room-conference',
        default: 'room-default',
        general: 'room-general',
      };
    }

    get school() {
      return {
        comment: 'school-comment',
        contact: 'school-contact',
        general: 'school-general',
      };
    }

    get student() {
      return {
        comment: 'student-comment',
        contact: 'student-contact',
        conference: 'student-conference',
        emergency: 'student-emergency',
        general: 'student-general',
        outreach: 'student-outreach',
      };
    }

    get user() {
      return {
        general: 'user-general',
        leadership: 'user-leadership',
      };
    }

    get icons() {
      return {
        close: 'fa fa-times fa-2x',
        conference: 'fa-building',
        create: 'fa-pencil',
        edit: 'fa-pencil-square-o',
        email: 'fa-envelope',
        expand: 'fa-angle-down',
        group: 'fa-star',
        hamburger: 'fa-bars',
        room: 'fa-book',
        save: 'fa-save',
        school: 'fa-university',
        search: 'fa-search',
        settings: 'fa-cog',
        student: 'fa-graduation-cap',
        volunteer: 'fa-user',
      };
    }
  }
  this.TypeConstants = new TypeConstants();
})();
