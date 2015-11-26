(() => {
  class TypeConstants {

    get icons() {
      return {

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
