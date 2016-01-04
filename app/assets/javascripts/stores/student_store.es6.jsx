(() => {
  class StudentStore {

    constructor() {
      this.editable = false;
      this.student = {
        comments: [],
      };
      this.overlay = false;
      this.template = {
        key: '',
        errors: {},
        options: [],
        type: '',
        value: '',
      };
      this.bindListeners({
        handleCloseOverlay: StudentActions.CLOSE_OVERLAY,
        handleStoreAttribute: StudentActions.STORE_ATTRIBUTE,
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreError: StudentActions.STORE_ERROR,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleStoreTemplate: StudentActions.STORE_TEMPLATE,
        handleToggleEditablity: StudentActions.TOGGLE_EDITABILITY,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreComment(response) {
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

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
