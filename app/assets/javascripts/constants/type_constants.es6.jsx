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
      }
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

    get icons() {
      return {
        bars: 'fa fa-bars fa-x',
        close: 'fa fa-times fa-2x',
        conference: 'fa-building',
        create: 'fa-pencil',
        edit: 'fa-pencil-square-o',
        expand: 'fa-angle-down',
        mail: 'fa fa-envelope fa-x',
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
