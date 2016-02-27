(() => {
  class GroupsStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = [];
      this.firstLoad = true;
      this.groups = [];
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: GroupsActions.CLOSE_OVERLAY,
        handleRemoveGroup: GroupsActions.REMOVE_GROUP,
        handleRestoreGroups: GroupsActions.RESTORE_GROUPS,
        handleStoreAttribute: GroupsActions.STORE_ATTRIBUTE,
        handleStoreConference: GroupsActions.STORE_CONFERENCE,
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
      this.groups = this.groups.filter((group) => group.id !== id);
    }

    handleRestoreGroups(state) {
      this.conference = state.conference;
      this.groups = state.groups;
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreConference(conference) {
      this.conference = conference;
      if (this.firstLoad) {
        this.firstLoad = false;
        window.history.replaceState(
          {
            conference: this.conference,
            groups: this.groups,
          },
          null,
          RouteConstants.groups.index(this.conference.id)
        );
      } else {
        window.history.pushState(
          {
            conference: this.conference,
            groups: this.groups,
          },
          null,
          RouteConstants.groups.index(this.conference.id)
        );
      }
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
