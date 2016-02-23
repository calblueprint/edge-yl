(() => {
  class FormActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeErrors',
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
      attributes['current_page'] = page.number;
      var params = { submission: attributes };
      var resolve = (response) => {
        var submission = response.submission;
        window.history.replaceState(
          {},
          null,
          RouteConstants.forms.student(1, submission.uuid),
        );
        window.location = RouteConstants.forms.student(page.number + 1, submission.uuid);
      };
      var reject = (response) => this.storeErrors({
        errors: response.errors,
        page: page.number,
      });
      Requester.post(
        ApiConstants.submissions.create,
        params,
        resolve,
        reject,
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

    updateSubmission(page, uuid) {
      var attributes = {};
      var questions = page.questions;
      questions.map((question) => attributes[question.key] = question.value);
      attributes['current_page'] = page.number;
      if (page['is_last']) {
        attributes['is_draft'] = false;
      }
      var params = { submission: attributes };
      var resolve = (response) => {
        var submission = response.submission;
        window.location = RouteConstants.forms.student(page.number + 1, submission.uuid);
      };
      var reject = (response) => this.storeErrors(response);
      Requester.update(
        ApiConstants.submissions.update(uuid),
        params,
        resolve,
        reject,
      );
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
