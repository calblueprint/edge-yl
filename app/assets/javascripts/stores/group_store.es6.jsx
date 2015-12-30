(() => {
  class GroupStore {

    constructor() {
      this.group = {
        conference: {},
        leaderships: [],
        students: [],
      };
      this.groupables = [];
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.template = {};
      this.bindListeners({
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreGroupables: GroupActions.STORE_GROUPABLES,
        handleStoreOverlay: GroupActions.STORE_OVERLAY,
      });
    }

    handleStoreGroup(response) {
      this.group = response.group;
    }

    handleStoreGroupables(response) {
      this.groupables = response.users;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
