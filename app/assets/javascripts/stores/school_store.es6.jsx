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
        secondary_contacts: [],
        students: [],
      };
      this.pairing = null;
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: SchoolActions.CLOSE_OVERLAY,
        handleDeleteContact: SchoolActions.DELETE_CONTACT,
        handleStoreAttribute: SchoolActions.STORE_ATTRIBUTE,
        handleStoreComment: SchoolActions.STORE_COMMENT,
        handleStoreError: SchoolActions.STORE_ERROR,
        handleStorePairing: SchoolActions.STORE_PAIRING,
        handleStorePrimary: SchoolActions.STORE_PRIMARY,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
        handleStoreSecondary: SchoolActions.STORE_SECONDARY,
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

    handleDeleteContact(contactId) {
      this.school['secondary_contacts'] = this.school['secondary_contacts'].filter(function(contact) { return contact.id !== contactId });
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
      this.school['primary_contact'] = response.contact;
    }

    handleStoreSchool(response) {
      this.overlay = false;
      this.school = response.school;
    }

    handleStoreSecondary(response) {
      this.overlay = false;
      this.school['secondary_contacts'].push(response.contact);
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
