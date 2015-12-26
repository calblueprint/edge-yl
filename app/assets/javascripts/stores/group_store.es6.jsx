(() => {
  class GroupStore {

    constructor() {
      this.group = {
        conference: {},
        leaderships: [],
        students: [],
      };
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
