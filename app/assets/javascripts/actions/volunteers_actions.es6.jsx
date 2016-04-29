(() => {
  class VolunteersActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'restoreVolunteers',
        'storeConference',
        'storeError',
        'storeVolunteer',
        'storeVolunteers',
      );
    }

    // --------------------------------------------------
    // Listeners
    // --------------------------------------------------
    attachListener() {
      window.onpopstate = (event) => this.restoreVolunteers(event.state);
      return true;
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createVolunteer(template, conference_id) {
      template.attributes['conference_id'] = conference_id;
      var params = { volunteer: template.attributes };
      var resolve = (response) => {
        this.storeVolunteer(response);
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

    fetchVolunteers(conference, page) {
      var resolve = (response) => {
        this.storeConference(conference);
        this.storeVolunteers(response);
      };
      Requester.get(
        ApiConstants.volunteers.index(conference.id, page),
        resolve,
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
