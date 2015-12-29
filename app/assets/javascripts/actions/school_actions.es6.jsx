(() => {
  class SchoolActions {

    constructor() {
      this.generateActions(
        'storeComment',
        'storeError',
        'storeSchool'
      );
    }

    createComment(id, params) {
      var resolve = (response) => this.storeComment(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve
      );
      return true;
    }

    fetchSchool(id) {
      var resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
      return true;
    }

    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateSchool(school, template) {
      var id = school.id;
      var attributes = Object.assign({}, template);
      Object.keys(attributes).map((key) => {
        if (typeof(attributes[key]) === 'object' ||
            student[key] === attributes[key]) {
          delete attributes[key];
        }
      });
      if (attributes.errors) {
        delete attributes.errors;
      }
      var params = { school: attributes };
      var resolve = (response) => this.storeSchool(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.schools.update(id),
        params,
        resolve,
        reject
      );
      return true;
    }
  }
  this.SchoolActions = alt.createActions(SchoolActions);
})();

