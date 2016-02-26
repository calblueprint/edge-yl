(() => {
  class GroupsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'removeGroup',
        'storeError',
        'storeGroup',
        'storeGroups',
        'storeGroupables',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createGroup(template) {
      var attributes = {
        letter: template.attributes.letter,
        leaderships_attributes: [],
      };
      var leaderships = attributes['leaderships_attributes'];
      leaderships.push(template.attributes['primary_leader']);
      leaderships.push(template.attributes['secondary_leader']);
      var params = { group: attributes };
      var resolve = (response) => this.storeGroup(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.groups.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    deleteGroup(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var attributes = {};
        attributes['conference_id'] = null;
        var params = { group: attributes };
        var resolve = (response) => this.removeGroup(response);
        Requester.update(
          ApiConstants.groups.update(id),
          params,
          resolve,
        );
      }
      return true;
    }

    exportGroups(conference_id) {
      Requester.csv(ApiConstants.csvs.groups(conference_id), 'groups');
      return true;
    }

    fetchGroups(conference) {
      var resolve = (response) => this.storeGroups(response);
      Requester.get(ApiConstants.groups.index(conference.id), resolve);
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storeTemplate(model, attributes={}) {
      if (model === TypeConstants.models.group) {
        var resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.users.groupables, resolve);
      }
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }
  }
  this.GroupsActions = alt.createActions(GroupsActions);
})();
