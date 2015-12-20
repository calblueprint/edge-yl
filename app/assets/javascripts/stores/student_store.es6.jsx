(() => {
  class StudentStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.student = {
        comments: [],
        group: {},
        school: {},
      };
      this.template = {
        errors: {},
      };
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
      this.template.errors = response.errors;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
      this.template = Object.assign({}, this.student);
      this.template.errors = {};
    }

    handleStoreStudent(response) {
      this.overlay.active = false;
      this.student = response.student;
      this.template = Object.assign({}, this.student);
      this.template.errors = {};
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
