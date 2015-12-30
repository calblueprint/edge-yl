(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'storeGroup',
        'storeGroupables',
      );
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      if (target === TypeConstants.group.leadership) {
        var resolve = (response) => console.log(response);
        Requester.get(ApiConstants.users.groupables, resolve);
        return true;
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
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
