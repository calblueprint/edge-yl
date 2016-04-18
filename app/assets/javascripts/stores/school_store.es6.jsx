(() => {
  class SchoolStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.school = {
        comments: [],
        contacts: [],
        primary_contact: {},
        responsibilities: [],
        secondary_contacts: [],
        students: [],
      };
      this.pairing = null;
      this.schoolables = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: SchoolActions.CLOSE_OVERLAY,
      handleRemoveContact: SchoolActions.REMOVE_CONTACT,
        handleStoreAttribute: SchoolActions.STORE_ATTRIBUTE,
        handleStoreComment: SchoolActions.STORE_COMMENT,
        handleStoreError: SchoolActions.STORE_ERROR,
        handleStorePairing: SchoolActions.STORE_PAIRING,
        handleStorePrimary: SchoolActions.STORE_PRIMARY,
        handleStoreResponsibility: SchoolActions.STORE_RESPONSIBILITY,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
        handleStoreSchoolables: SchoolActions.STORE_SCHOOLABLES,
        handleStoreTemplate: SchoolActions.STORE_TEMPLATE,
        handleStoreValue: SchoolActions.STORE_VALUE,
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

    handleRemoveContact(response) {
      var contacts = this.school.secondary_contacts;
      var id = response.contact.id;
      this.school.secondary_contacts = contacts.filter((contact) => contact.id !== id);
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

    handleStorePrimary(response) {
      this.overlay = false;
      this.school.primary_contact = response.contact;
    }

    handleStoreResponsibility(response) {
      this.overlay = false;
      var id = response.responsibility.id
      var responsibilities = this.school.responsibilities;
      this.school.responsibilities = responsibilities.filter((responsibility) => responsibility.id !== id);
      this.school.responsibilities.push(response.responsibility);
    }

    handleStoreSchool(response) {
      this.overlay = false;
      this.school = response.school;
    }

    handleStoreSchoolables(response) {
      this.schoolables = response.users;
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
