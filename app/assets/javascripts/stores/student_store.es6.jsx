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
        handleStoreAttribute: StudentActions.STORE_ATTRIBUTE,
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreError: StudentActions.STORE_ERROR,
        handleStoreOverlay: StudentActions.STORE_OVERLAY,
        handleStoreStudent: StudentActions.STORE_STUDENT,
      });
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreComment(response) {
      this.overlay.active = false;
      this.student.comments.push(response.comment);
    }

    handleStoreError(response) {
      this.template.error = response.message;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
      this.template = Object.assign({}, this.student);
    }

    handleStoreStudent(response) {
      this.overlay.active = false;
      this.student = response.student;
      this.template = Object.assign({}, this.student);
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
