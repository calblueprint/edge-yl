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
      this.overlay = false;
      this.template = {
        id: 0,
        key: '',
        errors: {},
        options: [],
        type: '',
        value: '',
      };
      this.bindListeners({
        handleCloseOverlay: GroupActions.CLOSE_OVERLAY,
        handleStoreAttribute: GroupActions.STORE_ATTRIBUTE,
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreGroupables: GroupActions.STORE_GROUPABLES,
        handleStoreLeadership: GroupActions.STORE_LEADERSHIP,
        handleStoreTemplate: GroupActions.STORE_TEMPLATE,
        handleToggleEditablity: GroupActions.TOGGLE_EDITABILITY,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
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
      this.template = {
        errors: {},
        id: 0,
        key: '',
        options: [],
        type: '',
        value: '',
      };
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
