(() => {
  class GroupActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeError',
        'storeGroup',
        'storeGroupables',
        'storeLeadership',
        'storeValue',
      );
    }

    deleteStudent(id) {
      attributes = {};
      attributes['group_id'] = null;
      params = { student: attributes };
      Requester.update(
        ApiConstants.students.update(id),
        params,
      );
      return id;
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storePairing(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        type: options.type,
        value: options.value,
      };
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

    updateGroup(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var resolve = (response) => this.storeGroup(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.groups.update(id),
        params,
        resolve,
        reject,
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
