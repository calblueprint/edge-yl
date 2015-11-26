(() => {
  class TypeConstants {

    get icons() {
      return {
        bars: 'fa fa-bars fa-x',
        close: 'fa fa-times fa-2x',
        edit: 'fa-pencil-square-o',
        mail: 'fa fa-envelope fa-x',
        profile: 'fa fa-user fa-x',
        save: 'fa-save',
        school: 'fa-university',
        search: 'fa-search',
        student: 'fa-graduation-cap',
        volunteer: 'fa-users',
      };
    }

    get overlay() {
      return {
        target: {
          comment: 'comment',
          contact: 'contact',
          conference: 'conference',
          parent: 'parent',
          preview: 'preview',
        },
        type: {
          create: 'create',
          edit: 'edit',
        },
      };
    }
  }
  this.TypeConstants = new TypeConstants();
})();
