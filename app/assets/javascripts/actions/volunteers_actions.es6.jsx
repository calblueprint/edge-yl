(() => {
  class VolunteersActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeError',
        'storeVolunteer',
        'storeVolunteers',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createVolunteer(template) {
      var params = { volunteer: template.attributes };
      var resolve = (response) => {
        this.storeVolunteer(response);
        console.log("Hi")
        ViewActions.storeToast(true, 'Volunteer created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.volunteers.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchVolunteers(page) {
      var resolve = (response) => this.storeVolunteers(response);
      Requester.get(ApiConstants.volunteers.index(page), resolve);
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

    storeTemplate(model, attributes={}) {
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }
  }
  this.VolunteersActions = alt.createActions(VolunteersActions);
})();
