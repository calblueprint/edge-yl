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
        handleDeleteGroup: GroupsActions.DELETE_GROUP,
        handleStoreGroups: GroupsActions.STORE_GROUPS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleDeleteGroup(groupId) {
      this.groups = this.groups.filter(function(group) { return group.id != groupId });
    }

    handleStoreGroups(response) {
      this.groups = response.groups;
    }
  }
  this.GroupsStore = alt.createStore(GroupsStore);
})();
