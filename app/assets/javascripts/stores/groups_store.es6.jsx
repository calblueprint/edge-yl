(() => {
  class GroupsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = [];
      this.groups = [];
      this.bindListeners({
        handleStoreGroups: GroupsActions.STORE_GROUPS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreGroups(response) {
      this.groups = response.groups;
    }
  }
  this.GroupsStore = alt.createStore(GroupsStore);
})();
