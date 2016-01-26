(() => {
  class StudentStore {

    constructor() {
      this.overlay = false;
      this.student = {
        comments: [],
      };
      this.pairing = {};
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: StudentActions.CLOSE_OVERLAY,
        handleStoreAttribute: StudentActions.STORE_ATTRIBUTE,
        handleStoreComment: StudentActions.STORE_COMMENT,
        handleStoreError: StudentActions.STORE_ERROR,
        handleStorePairing: StudentActions.STORE_PAIRING,
        handleStoreStudent: StudentActions.STORE_STUDENT,
        handleStoreTemplate: StudentActions.STORE_TEMPLATE,
        handleStoreValue: StudentActions.STORE_VALUE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
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

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.StudentStore = alt.createStore(StudentStore);
})();
