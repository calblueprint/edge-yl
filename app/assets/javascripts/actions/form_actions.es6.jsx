(() => {
  class FormActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeError',
        'storeForm',
        'storeObject',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createSubmission(form) {
      var attributes = {};
      form.pages[0].questions.map(
        (question) => attributes[question.key] = question.value;
      );
      var params = { submission: attributes };
      var resolve = (response) => this.storeObject(response);
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.submissions.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchForm(target) {
      var resolve = (response) => this.storeForm(response);
      Requester.get(ApiConstants.forms.show(target), resolve);
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeResponse(section, question, value) {
      return {
        question: question,
        section: section,
        value: value,
      };
    }
  }
  this.FormActions = alt.createActions(FormActions);
})();
