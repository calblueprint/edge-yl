(() => {
  class UsersStore {

    constructor() {
      this.sidebar = true;
      this.users = [];
      this.bindListeners({
        handleToggleSidebar: UsersActions.TOGGLE_SIDEBAR,
        handleStoreUsers: UsersActions.STORE_USERS,
      });
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }

    handleStoreUsers(users) {
      this.users = users;
    }
    
  }
  this.UsersStore = alt.createStore(UsersStore);
})();
