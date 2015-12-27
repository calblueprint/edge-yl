(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'storeGroup',
      );
    }

    fetchGroup(conferenceId, id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.conferences.groups.show(conferenceId, id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateGroup(conferenceId, id, params) {
      var resolve = (response) => this.storeGroup(response);
      Requester.update(
        ApiConstants.conferences.groups.update(conferenceId, id),
        params,
        resolve
      );
      return true;
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
