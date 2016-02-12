(() => {
  class GroupsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = [];
      this.groups = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: GroupsActions.CLOSE_OVERLAY,
        handleRemoveGroup: GroupsActions.REMOVE_GROUP,
        handleStoreAttribute: GroupsActions.STORE_ATTRIBUTE,
        handleStoreError: GroupsActions.STORE_ERROR,
        handleStoreGroup: GroupsActions.STORE_GROUP,
        handleStoreGroupables: GroupsActions.STORE_GROUPABLES,
        handleStoreGroups: GroupsActions.STORE_GROUPS,
        handleStoreTemplate: GroupsActions.STORE_TEMPLATE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.template = null;
    }

    handleRemoveGroup(response) {
      var id = response.group.id;
      this.groups = this.groups.filter((group) => group.id != id);
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreGroup(response) {
      this.overlay = false;
      this.groups.push(response.group);
    }

    handleStoreGroupables(response) {
      this.groupables = response.users;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreGroups(response) {
      this.groups = response.groups;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.pairing = null;
      this.template = template;
    }
  }
  this.GroupsStore = alt.createStore(GroupsStore);
})();
