(() => {
  class UserActions {

    constructor() {
      this.generateActions(
        'storeComment',
        'storeComments',
        'storeUser',
        'toggleSidebar'
      );
    }

    createComment(id, params) {
      // resolve = (response) => this.storeComment(response);
      // Requester.post(ApiConstants.users.comments.create(id), params, resolve);
      return true;
    }

    fetchComments(id) {
      // resolve = (response) => this.storeComments(response);
      // Requester.get(ApiConstants.users.comments.index(id), resolve);
      return true;
    }

    fetchUser(id) {
      resolve = (response) => this.storeUser(response);
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
      resolve = (response) => this.storeUser(response);
      Requester.update(ApiConstants.users.update(id), params, resolve);
      return true;
    }
  }
  this.UserActions = alt.createActions(UserActions);
})();
