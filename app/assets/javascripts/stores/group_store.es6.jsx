(() => {
  class GroupStore {

    constructor() {
      this.group = {
        conference: {},
        students: [],
      };
      this.sidebar = true;
      this.bindListeners({
        handleStoreGroup: GroupActions.STORE_GROUP,
      });
    }

    handleStoreGroup(response) {
      this.group = response.group;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
