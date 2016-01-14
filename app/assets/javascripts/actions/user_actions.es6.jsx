(() => {
  class UserActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeUser',
      );
    }

    fetchUser(id) {
      var resolve = (response) => this.storeUser(response);
      Requester.get(ApiConstants.users.show(id), resolve);
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
  }
  this.UserActions = alt.createActions(UserActions);
})();
