(() => {
  class StudentsStore {

    constructor() {
      this.students = [];
      // this.bindListeners({
      //   handleUpdateName: NameActions.UPDATE_NAME
      // });
    }

    // handleUpdateName(name) {
    //   this.name = name;
    // }
  }

  this.StudentsStore = alt.createStore(StudentsStore, 'StudentsStore');
})();
