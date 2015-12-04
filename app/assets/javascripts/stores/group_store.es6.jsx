(() => {
  class GroupStore {

    constructor() {
      this.sidebar = true;
      this.group = {
        students: [],
      };
      this.bindListeners({
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleToggleSidebar: StudentActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreGroup(response) {
      this.group = response.group;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
