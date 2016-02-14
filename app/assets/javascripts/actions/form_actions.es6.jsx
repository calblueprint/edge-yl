(() => {
  class FormActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
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
        history.replaceState(
          {},
          null,
          RouteConstants.forms.student(1, submission.uuid),
        );
        window.location = RouteConstants.forms.student(2, submission.uuid);
      };
      Requester.post(
        ApiConstants.submissions.create,
        params,
        resolve,
      );
      return true;
    }

    fetchForm(target, page, uuid) {
      var resolve = (response) => {
        this.storeForm(response);
        this.fetchSubmission(page, uuid);
      };
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
