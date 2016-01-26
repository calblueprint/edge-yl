(() => {
  class ConferenceActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeConference',
        'storeGroup',
        'storeError',
      );
    }

    createGroup(params) {
      var resolve = (response) => this.storeGroup(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.groups.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchConference(id) {
      var resolve = (response) => this.storeConference(response);
      Requester.get(ApiConstants.conferences.show(id), resolve);
      return true;
    }

    storeTemplate() {
      return {
        // choices: options.choices,
        // errors: {},
        // id: options.id,
        // key: options.key,
        // model: options.model,
        // type: options.type,
        // value: options.value,
        errors: {},
      };
    }

    updateConference(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { conference: attributes };
      var resolve = (response) => this.storeConference(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.conferences.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.ConferenceActions = alt.createActions(ConferenceActions);
})();

