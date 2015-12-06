(() => {
  class UsersStore {

    constructor() {
      this.pagination = {
        current: 1,
        limit: 1,
      };
      this.sidebar = true;
      this.users = [];
      this.bindListeners({
        handleToggleSidebar: UsersActions.TOGGLE_SIDEBAR,
        handleStoreUsers: UsersActions.STORE_USERS,
      });
    }

    handleStoreUsers(response) {
      this.pagination = response.meta.pagination;
      this.users = response.users;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.UsersStore = alt.createStore(UsersStore);
})();
