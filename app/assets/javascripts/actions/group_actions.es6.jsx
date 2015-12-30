(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'storeGroup',
      );
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      // if (target === TypeConstants.group.leadership) {}
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
