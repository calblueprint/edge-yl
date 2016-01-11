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

    get icons() {
      return {
        bars: 'fa fa-bars fa-x',
        close: 'fa fa-times fa-2x',
        conference: 'fa-building',
        create: 'fa-pencil',
        edit: 'fa-pencil-square-o',
        email: 'fa fa-envelope fa-x',
        expand: 'fa-angle-down',
        group: 'fa-star',
        profile: 'fa fa-user fa-x',
        save: 'fa-save',
        school: 'fa-university',
        search: 'fa-search',
        student: 'fa-graduation-cap',
        volunteer: 'fa-users',
      };
    }
  }
  this.TypeConstants = new TypeConstants();
})();
