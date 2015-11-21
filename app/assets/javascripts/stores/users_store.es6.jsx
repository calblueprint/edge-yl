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

    handleStoreUsers(users) {
      console.log(users);
      this.users = users;
    }
    
    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.UsersStore = alt.createStore(UsersStore);
})();
