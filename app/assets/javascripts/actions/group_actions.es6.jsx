(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'storeGroup',
        'storeGroupables',
        'toggleEditability'
      );
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      if (target === TypeConstants.group.leadership) {
        var resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.users.groupables, resolve);
      }
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateGroup(id, params) {
      var resolve = (response) => this.storeGroup(response);
      Requester.update(
        ApiConstants.groups.update(id),
        params,
        resolve
      );
      return true;
    }

    updateLeadership(id, params) {
      var resolve = (response) => console.log(response);
      Requester.update(
        ApiConstants.leaderships.update(id),
        { leadership: params },
        resolve
      );
      return true;
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
