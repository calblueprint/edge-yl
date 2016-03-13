(() => {
  class PartialSchoolsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overaly = false;
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.partial_schools = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: PartialSchoolsActions.CLOSE_OVERLAY,
        handleRemovePartialSchool: PartialSchoolsActions.REMOVE_PARTIAL_SCHOOL,
        handleStoreAttribute: PartialSchoolsActions.STORE_ATTRIBUTE,
        handleStoreError: PartialSchoolsActions.STORE_ERROR,
        handleStorePartialSchool: PartialSchoolsActions.STORE_PARTIAL_SCHOOL,
        handleStorePartialSchools: PartialSchoolsActions.STORE_PARTIAL_SCHOOLS,
        handleStoreTemplate: PartialSchoolsActions.STORE_TEMPLATE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.template = null;
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStorePartialSchool(response) {
      this.overlay = false;
      this.partial_schools.push(response.partial_school);
    }

    handleStorePartialSchools(response) {
      this.pagination = response.meta.pagination;
      this.partial_schools = response.partial_schools;
    }

    handleRemovePartialSchool(response) {
      var id = response.partial_school.id;
      this.partial_schools = this.partial_schools.filter((school) => school.id !== id);
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.PartialSchoolsStore = alt.createStore(PartialSchoolsStore);
})();
