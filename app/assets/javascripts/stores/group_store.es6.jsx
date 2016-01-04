(() => {
  class GroupStore {

    constructor() {
      this.editable = false;
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
        handleToggleEditablity: GroupActions.TOGGLE_EDITABILITY,
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

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
