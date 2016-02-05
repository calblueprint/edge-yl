(() => {
  class UserActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeUser',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    fetchUser(id) {
      var resolve = (response) => this.storeUser(response);
      Requester.get(ApiConstants.users.show(id), resolve);
      return true;
    }

    updateUser(template, attributes={}) {
      attributes[template.key] = template.value;
      var params = { user: attributes };
      var resolve = (response) => this.storeUser(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.users.update(template.id),
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
  this.UserActions = alt.createActions(UserActions);
})();
