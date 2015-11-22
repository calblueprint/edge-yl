(() => {
  class UsersActions {

    constructor() {
      this.generateActions(
        'storeUsers',
        'toggleSidebar'
      );
    }

    fetchUsers() {
      resolve = (response) => this.storeUsers(response);
      Requester.get(ApiConstants.users.index, resolve);
      return true;
    }
  }
  this.UsersActions = alt.createActions(UsersActions);
})();
