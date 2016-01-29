(() => {
  class SchoolStore {

    constructor() {
      this.overlay = false;
      this.school = {
        comments: [],
        students: [],
      };
      this.pairing = null;
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: SchoolActions.CLOSE_OVERLAY,
        handleStoreAttribute: SchoolActions.STORE_ATTRIBUTE,
        handleStoreComment: SchoolActions.STORE_COMMENT,
        handleStoreError: SchoolActions.STORE_ERROR,
        handleStorePairing: SchoolActions.STORE_PAIRING,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
        handleStoreTemplate: SchoolActions.STORE_TEMPLATE,
        handleStoreValue: SchoolActions.STORE_VALUE,
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
      this.school.comments.push(response.comment);
    }

    handleStoreError(response) {
      if (this.pairing) {
        this.pairing.errors = response.errors;
      } else if (this.template) {
        this.template.errors = response.errors;
      }
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = null;
    }

    handleStoreSchool(response) {
      this.overlay = false;
      this.school = response.school;
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
  this.SchoolStore = alt.createStore(SchoolStore);
})();
