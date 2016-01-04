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
      this.template = {
        active: false,
        id: 0,
        key: '',
        errors: {},
        options: [],
        type: '',
        value: '',
      };
      this.bindListeners({
        handleStoreAttribute: GroupActions.STORE_ATTRIBUTE,
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreGroupables: GroupActions.STORE_GROUPABLES,
        handleStoreLeadership: GroupActions.STORE_LEADERSHIP,
        handleStoreTemplate: GroupActions.STORE_TEMPLATE,
        handleToggleEditablity: GroupActions.TOGGLE_EDITABILITY,
      });
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
      this.template = {
        active: false,
        key: '',
        errors: {},
        options: [],
        type: '',
        value: '',
      };
    }

    handleStoreTemplate(template) {
      this.template = template;
    }

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
