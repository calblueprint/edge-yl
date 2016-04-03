(() => {
  class ProspectsActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeError',
        'storeProspect',
        'storeProspects',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createProspect(template) {
      var params = { prospect: template.attributes };
      var resolve = (response) => {
        this.storeProspect(response);
        ViewActions.storeToast(true, 'Prospect created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.prospects.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    deleteProspect(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var resolve = () => {
          this.fetchProspects();
          ViewActions.storeToast(true, 'Prospect removed!');
        };
        Requester.delete(
          ApiConstants.prospects.delete(id),
          resolve,
        );
      }
      return true;
    }

    fetchProspects(page=1) {
      var resolve = (response) => this.storeProspects(response);
      Requester.get(ApiConstants.prospects.index(page), resolve);
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
  this.ProspectsActions = alt.createActions(ProspectsActions);
})();
