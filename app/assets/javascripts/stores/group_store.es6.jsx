(() => {
  class GroupStore {

    constructor() {
      this.group = {
        conference: {},
        leaderships: [],
        students: [],
      };
      this.groupables = [];
      this.overlay = false;
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: GroupActions.CLOSE_OVERLAY,
        handleStoreAttribute: GroupActions.STORE_ATTRIBUTE,
        handleStoreError: GroupActions.STORE_ERROR,
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreGroupables: GroupActions.STORE_GROUPABLES,
        handleStoreLeadership: GroupActions.STORE_LEADERSHIP,
        handleStoreTemplate: GroupActions.STORE_TEMPLATE,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreGroup(response) {
      this.group = response.group;
    }

    handleStoreGroupables(response) {
      this.groupables = response.users;
    }

    handleStoreLeadership(response) {
      this.group.leaderships.map((leadership) => {
        if (leadership.id === response.leadership.id) {
          leadership.user = response.leadership.user;
        }
      });
      this.overlay = false;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
