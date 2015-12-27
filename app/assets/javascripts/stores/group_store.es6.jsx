(() => {
  class GroupStore {

    constructor() {
      this.group = {
        conference: {},
        leaderships: [],
        students: [],
      };
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.bindListeners({
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreOverlay: GroupActions.STORE_OVERLAY,
      });
    }

    handleStoreGroup(response) {
      this.group = response.group;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
