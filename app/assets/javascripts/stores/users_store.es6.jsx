(() => {
  class UsersStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.users = [];
      this.bindListeners({
        handleStoreUsers: UsersActions.STORE_USERS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreUsers(response) {
      this.pagination = response.meta.pagination;
      this.users = response.users;
    }
  }
  this.UsersStore = alt.createStore(UsersStore);
})();
