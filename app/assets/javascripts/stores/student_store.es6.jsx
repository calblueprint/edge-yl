(() => {
  class StudentStore {

    constructor() {
      this.overlay = false;
      this.student = {
        comments: [],
      };
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: StudentActions.CLOSE_OVERLAY,
        handleStoreAttribute: StudentActions.STORE_ATTRIBUTE,
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreError: StudentActions.STORE_ERROR,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleStoreTemplate: StudentActions.STORE_TEMPLATE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreComment(response) {
      this.overlay = false;
      this.student.comments.push(response.comment);
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreStudent(response) {
      this.overlay = false;
      this.student = response.student;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
