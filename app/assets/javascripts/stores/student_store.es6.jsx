(() => {
  class StudentStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.pairing = null;
      this.student = {
        comments: [],
      };
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: StudentActions.CLOSE_OVERLAY,
        handleRemoveComment: StudentActions.REMOVE_COMMENT,
        handleStoreAttribute: StudentActions.STORE_ATTRIBUTE,
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreError: StudentActions.STORE_ERROR,
        handleStorePairing: StudentActions.STORE_PAIRING,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleStoreTemplate: StudentActions.STORE_TEMPLATE,
        handleStoreValue: StudentActions.STORE_VALUE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.pairing = null;
      this.template = null;
    }

    handleRemoveComment(response) {
      var comments = this.student.comments;
      var id = response.comment.id;
      this.student.comments = comments.filter((comment) => comment.id !== id);
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreComment(response) {
      this.overlay = false;
      this.student.comments.push(response.comment);
    }

    handleStoreError(response) {
      if (this.pairing) {
        this.pairing.errors = response.errors;
      } else if (this.template) {
        this.template.errors = response.errors;
      }
    }

    handleStoreStudent(response) {
      this.overlay = false;
      this.student = response.student;
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = null;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.pairing = null;
      this.template = template;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
