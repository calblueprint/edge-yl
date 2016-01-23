(() => {
  class ConferenceActions {

    constructor() {
      this.generateActions(
        'storeConference',
        'storeGroup',
      );
    }

    createGroup(params) {
      var resolve = (response) => this.storeGroup(response);
      Requester.post(
        ApiConstants.groups.create,
        params,
        resolve,
      );
      return true;
    }

    fetchConference(id) {
      var resolve = (response) => this.storeConference(response);
      Requester.get(ApiConstants.conferences.show(id), resolve);
      return true;
    }

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

    updateConference(id, params) {
      var resolve = (response) => this.storeConference(response);
      Requester.update(
        ApiConstants.conferences.update(id),
        params,
        resolve,
      );
      return true;
    }
  }
  this.ConferenceActions = alt.createActions(ConferenceActions);
})();

