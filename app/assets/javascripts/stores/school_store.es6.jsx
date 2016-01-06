(() => {
  class SchoolStore {

    constructor() {
      this.editable = false;
      this.overlay = false;
      this.school = {
        comments: [],
        students: [],
      };
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: SchoolActions.CLOSE_OVERLAY,
        handleStoreAttribute: SchoolActions.STORE_ATTRIBUTE,
        handleStoreComment: SchoolActions.STORE_COMMENT,
        handleStoreError: SchoolActions.STORE_ERROR,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
        handleStoreTemplate: SchoolActions.STORE_TEMPLATE,
        handleToggleEditablity: SchoolActions.TOGGLE_EDITABILITY,
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
      this.school.comments.push(response.comment);
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreSchool(response) {
      this.overlay = false;
      this.school = response.school;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();
