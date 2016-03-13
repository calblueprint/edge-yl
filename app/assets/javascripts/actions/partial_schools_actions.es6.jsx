(() => {
  class PartialSchoolsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'removePartialSchool',
        'storeError',
        'storePartialSchool',
        'storePartialSchools',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createPartialSchool(template) {
      var params = { partial_school: template.attributes };
      var resolve = (response) => {
        this.storePartialSchool(response);
        ViewActions.storeToast(true, 'Partial School created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.partial_schools.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    deletePartialSchool(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var resolve = (response) => this.removePartialSchool(response);
        Requester.delete(
          ApiConstants.partial_schools.delete(id),
          resolve,
        );
      }
      return true;
    }

    fetchPartialSchools(page) {
      var resolve = (response) => this.storePartialSchools(response);
      Requester.get(ApiConstants.partial_schools.index(page), resolve);
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
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }
  }
  this.PartialSchoolsActions = alt.createActions(PartialSchoolsActions);
})();
