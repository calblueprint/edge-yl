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
      var params = { student_submission: attributes };
      var resolve = (response) => {
        var submission = response.student_submission;
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
          submission: response.student_submission,
        });
        Requester.get(ApiConstants.submissions.show(uuid), resolve);
      }
      return true;
    }

    updateSubmission(page, target, uuid, forward) {
      var attributes = {};
      var questions = page.questions;
      questions.map((question) => attributes[question.key] = question.value);
      attributes['current_page'] = page.number;
      if (page['is_last'] && forward) {
        attributes['is_draft'] = false;
      } else {
        attributes['is_draft'] = true;
      }
      var params;
      var resolve;
      if (target === 'school') {
        params = { school_submission: attributes };
        resolve = (response) => {
          var submission = response.school_submission;
          number = forward ? page.number + 1 : page.number - 1;
          window.location = RouteConstants.forms.school(number, submission.uuid);
        };
      } else if (target === 'student') {
        params = { student_submission: attributes };
        resolve = (response) => {
          var submission = response.student_submission;
          number = forward ? page.number + 1 : page.number - 1;
          window.location = RouteConstants.forms.student(number, submission.uuid);
        };
      }
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
