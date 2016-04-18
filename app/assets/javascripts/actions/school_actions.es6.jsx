(() => {
  class SchoolActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'removeContact',
        'storeComment',
        'storeError',
        'storePrimary',
        'storeResponsibility',
        'storeSchool',
        'storeSchoolables',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createComment(template) {
      var params = { comment: template.attributes };
      var resolve = (response) => {
        this.storeComment(response);
        ViewActions.storeToast(true, 'Comment created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    createDraft(sender, recipient) {
      var attributes = {
        recipient: recipient,
        sender: sender,
      };
      var params = { email: attributes };
      var resolve = (response) => {
        window.location = RouteConstants.drafts.show(response.email.id);
      };
      Requester.post(
        ApiConstants.drafts.create,
        params,
        resolve,
      );
      return true;
    }

    createContact(template) {
      var params = { contact: template.attributes };
      var resolve = (response) => {
        this.fetchSchool(response.contact.school_id);
        ViewActions.storeToast(true, 'Contact created!');
      }
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.contacts.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    deleteContact(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var attributes = { school_id: null };
        var params = { contact: attributes };
        var resolve = (response) => {
          this.removeContact(response);
          ViewActions.storeToast(true, 'Contact removed!');
        };
        Requester.update(
          ApiConstants.contacts.update(id),
          params,
          resolve,
        );
      }
      return true;
    }

    fetchSchool(id) {
      var resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
      return true;
    }

    promoteContact(id, school_id) {
      var attributes = {};
      var params = { contact: attributes };
      var resolve = (response) => {
        this.fetchSchool(school_id);
        ViewActions.storeToast(true, 'Contact updated!');
      };
      var reject = (response) => this.storeError(response)
      Requester.update(
        ApiConstants.contacts.promote(id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateContact(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { contact: attributes };
      var resolve = (response) => {
        this.storePrimary(response);
        ViewActions.storeToast(true, 'Contact updated!');
      };
      var reject = (response) => this.storeError(response)
      Requester.update(
        ApiConstants.contacts.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateResponsibility(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value.id;
      var params = { responsibility: attributes };
      var resolve = (response) => {
        this.storeResponsibility(response);
        ViewActions.storeToast(true, 'Responsibility assigned!');
      };
      var reject = (response) => this.storeError(response)
      Requester.update(
        ApiConstants.responsibilities.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateSchool(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { school: attributes };
      var resolve = (response) => {
        this.storeSchool(response);
        ViewActions.storeToast(true, 'School updated!');
      };
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.schools.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storePairing(options) {
      if (options.model === TypeConstants.models.responsibility) {
        var resolve = (response) => this.storeSchoolables(response);
        Requester.get(ApiConstants.users.schoolables, resolve);
      }
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    storeTemplate(model, attributes={}) {
      return {
        attributes: attributes,
        errors: {},
        model: model,
      }
    }
  }
  this.SchoolActions = alt.createActions(SchoolActions);
})();

