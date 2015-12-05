(() => {
  class UserActions {

    constructor() {
      this.generateActions(
        'storeUser',
        'toggleSidebar'
      );
    }

    fetchUser(id) {
      var resolve = (response) => this.storeUser(response);
      Requester.get(ApiConstants.users.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateUser(id, params) {
      var resolve = (response) => this.storeUser(response);
      Requester.update(ApiConstants.users.update(id), params, resolve);
      return true;
    }
  }
  this.UserActions = alt.createActions(UserActions);
})();
