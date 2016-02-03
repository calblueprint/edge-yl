(() => {
  class GroupsStore {

    constructor() {
      this.conference = {};
      this.conferences = [];
      this.groups = [];
      this.bindListeners({
        handleStoreGroups: GroupsActions.STORE_GROUPS,
      });
    }

    handleStoreGroups(response) {
      this.groups = response.groups;
    }
  }
  this.GroupsStore = alt.createStore(GroupsStore);
})();
