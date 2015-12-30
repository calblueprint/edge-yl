(() => {
  class SchoolStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.school = {
        comments: [],
        students: [],
      };
      this.template = {
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: SchoolActions.STORE_ATTRIBUTE,
        handleStoreComment: SchoolActions.STORE_COMMENT,
        handleStoreError: SchoolActions.STORE_ERROR,
        handleStoreOverlay: SchoolActions.STORE_OVERLAY,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
      });
    }

    handleStoreAttribute(attribute) {
      this.template[attribute.key] = attribute.value;
    }

    handleStoreComment(response) {
      this.overlay.active = false;
      this.school.comments.push(response.comment);
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
      this.template = Object.assign({}, this.school);
      this.template.errors = {};
    }

    handleStoreSchool(response) {
      this.overlay.active = false;
      this.school = response.school;
      this.template = Object.assign({}, this.student);
      this.template.errors = {};
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();
