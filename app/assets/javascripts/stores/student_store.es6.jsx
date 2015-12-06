(() => {
  class StudentStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.student = {
        comments: [],
        group: {},
        school: {},
      };
      this.template = {};
      this.bindListeners({
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreOverlay: StudentActions.STORE_OVERLAY,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleStoreTemplate: StudentActions.STORE_TEMPLATE,
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreComment(response) {
      this.overlay.active = false;
      this.student.comments.push(response.comment);
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreStudent(response) {
      this.overlay.active = false;
      this.student = response.student;
      this.template = Object.assign({}, this.student);
    }

    handleStoreTemplate(params) {
      this.template[params.key] = params.value;
      console.log(this.template);
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
