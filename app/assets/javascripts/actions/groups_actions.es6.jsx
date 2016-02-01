(() => {
  class GroupsActions {

    constructor() {
      this.generateActions(
        'storeGroups',
      );
    }

    fetchGroups(conference) {
      var resolve = (response) => this.storeGroups(response);
      Requester.get(ApiConstants.groups.index(conference.id), resolve);
      return true;
    }
  }
  this.GroupsActions = alt.createActions(GroupsActions);
})();
