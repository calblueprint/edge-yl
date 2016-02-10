(() => {
  class GroupActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
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

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    deleteStudent(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        attributes = {};
        attributes['group_id'] = null;
        params = { student: attributes };
        Requester.update(
          ApiConstants.students.update(id),
          params,
        );
      return id;
      }
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    updateGroup(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { group: attributes };
      var resolve = (response) => this.storeGroup(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.groups.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateLeadership(pairing, attributes={}) {
      attributes = { user_id: pairing.value.id };
      var params = { leadership: attributes };
      var resolve = (response) => this.storeLeadership(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.leaderships.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storePairing(options) {
      if (options.model === 'leadership') {
        var resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.users.groupables, resolve);
      }
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        label: options.label,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
