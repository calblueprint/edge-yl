(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeGroup',
        'storeGroupables',
        'storeLeadership',
        'toggleEditability'
      );
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    storeTemplate(type, id, key, value, options) {
      // TODO(Warren): Think about a possible better conditional.
      if (type === 'dropdown') {
        var resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.users.groupables, resolve);
      }
      return {
        errors: {},
        id: id,
        key: key ? key : '',
        options: options ? options : [],
        type: type,
        value: value ? value : '',
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

    updateLeadership(template) {
      var attributes = { user_id: template.value.id };
      var params = { leadership: attributes };
      var resolve = (response) => this.storeLeadership(response);
      Requester.update(
        ApiConstants.leaderships.update(template.id),
        params,
        resolve
      );
      return true;
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
