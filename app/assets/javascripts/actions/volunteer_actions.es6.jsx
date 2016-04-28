(() => {
  class VolunteerActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeVolunteer',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchVolunteer(id) {
      var resolve = (response) => this.storeVolunteer(response);
      Requester.get(ApiConstants.volunteers.show(id), resolve);
      return true;
    }

    updateVolunteer(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { volunteer: attributes };
      var resolve = (response) => this.storeVolunteer(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.volunteers.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeTemplate(options) {
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
  }
  this.VolunteerActions = alt.createActions(VolunteerActions);
})();
