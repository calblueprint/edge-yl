(() => {
  class StudentStore {

    constructor() {
      this.editable = false;
      this.student = {
        comments: [],
        group: {},
        school: {},
      };
      this.template = {
        active: false,
        key: '',
        errors: {},
        options: [],
        type: '',
        value: '',
      };
      this.bindListeners({
        handleStoreAttribute: StudentActions.STORE_ATTRIBUTE,
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreError: StudentActions.STORE_ERROR,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleStoreTemplate: StudentActions.STORE_TEMPLATE,
        handleToggleEditablity: StudentActions.TOGGLE_EDITABILITY,
      });
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
      this.student = response.student;
      this.template = {
        active: false,
        key: '',
        errors: {},
        options: [],
        type: '',
        value: '',
      };
    }

    handleStoreTemplate(template) {
      this.template = template;
    }

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
