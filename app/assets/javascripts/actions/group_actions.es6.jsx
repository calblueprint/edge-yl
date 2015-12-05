(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'storeGroup',
        'toggleSidebar'
      );
    }

    fetchGroup(conferenceId, id) {
      console.log(conferenceId + ' ' + id);
      resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.conferences.groups.show(conferenceId, id), resolve);
      return true;
    }

    updateGroup(conferenceId, id, params) {
      resolve = (response) => this.storeGroup(response);
      Requester.update(ApiConstants.conferences.groups.update(conferenceId, id), params, resolve);
      return true;
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
