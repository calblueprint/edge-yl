(() => {
  class GroupsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeGroups',
      );
    }


    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    deleteGroup(id) {
      var attributes = {};
      attributes['conference_id'] = null;
      var params = { group: attributes };
      Requester.update(
        ApiConstants.groups.update(id),
        params,
      );
      return id;
    }

    fetchGroups(conference) {
      var resolve = (response) => this.storeGroups(response);
      Requester.get(ApiConstants.groups.index(conference.id), resolve);
      return true;
    }
  }
  this.GroupsActions = alt.createActions(GroupsActions);
})();
