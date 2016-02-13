(() => {
  class FormActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeError',
        'storeForm',
        'storeSubmission',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createSubmission(page) {
      var attributes = {};
      var questions = page.questions;
      questions.map((question) => attributes[question.key] = question.value);
      var params = { submission: attributes };
      var resolve = (response) => {
        var submission = response.submission;
        window.location = RouteConstants.forms.student(2, submission.uuid);
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.submissions.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchForm(target, page, uuid) {
      this.fetchSubmission(page, uuid);
      var resolve = (response) => this.storeForm(response);
      Requester.get(ApiConstants.forms.show(target), resolve);
      return true;
    }

    fetchSubmission(page, uuid) {
      if (uuid) {
        var resolve = (response) => this.storeSubmission({
          page: page,
          submission: response.submission,
        });
        Requester.get(ApiConstants.submissions.show(uuid), resolve);
      }
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeResponse(page, question, value) {
      return {
        page: page,
        question: question,
        value: value,
      };
    }
  }
  this.FormActions = alt.createActions(FormActions);
})();
