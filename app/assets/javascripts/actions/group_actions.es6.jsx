(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeError',
        'storeGroup',
        'storeGroupables',
        'storeLeadership',
      );
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    storeTemplate(options) {
      if (options.model === 'leadership') {
        var resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.users.groupables, resolve);
      }
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    updateGroup(id, params) {
      var resolve = (response) => this.storeGroup(response);
      Requester.update(
        ApiConstants.groups.update(id),
        params,
        resolve,
      );
      return true;
    }

    updateLeadership(template) {
      var attributes = { user_id: template.value.id };
      var params = { leadership: attributes };
      var resolve = (response) => this.storeLeadership(response);
      Requester.update(
        ApiConstants.leaderships.update(template.id),
        params,
        resolve,
      );
      return true;
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
