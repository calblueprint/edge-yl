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
    createSubmission(page, target) {
      var attributes = {};
      var questions = page.questions;
      questions.map((question) => attributes[question.key] = question.value);
      attributes['current_page'] = page.number;
      if (target === 'school') {
        var params = { school_submission: attributes };
        var resolve = (response) => {
          var submission = response.school_submission;
          window.history.replaceState(
            {},
            null,
            RouteConstants.forms.school(1, submission.uuid),
          );
          window.location = RouteConstants.forms.school(page.number + 1, submission.uuid);
        };
        var reject = (response) => this.storeErrors({
          errors: response.errors,
          page: page.number,
        });
        Requester.post(
          ApiConstants.submissions.school.create,
          params,
          resolve,
          reject,
        );
      } else if (target === 'student') {
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
          ApiConstants.submissions.student.create,
          params,
          resolve,
          reject,
        );
      }
      return true;
    }

    fetchForm(target, page, uuid) {
      var resolve = (response) => {
        this.storeForm(response);
        this.fetchSubmission(page, target, uuid);
      };
      Requester.get(ApiConstants.forms.show(target), resolve);
      return true;
    }

    fetchSubmission(page, target, uuid) {
      if (uuid) {
        if (target === 'school') {
          var resolve = (response) => this.storeSubmission({
            page: page,
            submission: response.school_submission,
          });
          Requester.get(
            ApiConstants.submissions.school.show(uuid),
            resolve,
          );
        } else if (target === 'student') {
          var resolve = (response) => this.storeSubmission({
            page: page,
            submission: response.student_submission,
          });
          Requester.get(
            ApiConstants.submissions.student.show(uuid),
            resolve,
          );
        }
      }
      return true;
    }

    updateSubmission(page, target, uuid, forward) {
      console.log(forward);
      var attributes = {};
      var questions = page.questions;
      questions.map((question) => attributes[question.key] = question.value);
      if (target === 'school') {
        var params = { school_submission: attributes };
        var resolve = (response) => {
          var submission = response.school_submission;
          number = forward ? page.number + 1 : page.number - 1;
          if (page.is_last) {
            window.location = RouteConstants.forms.preview(target, submission.uuid);
          } else {
            window.location = RouteConstants.forms.school(number, submission.uuid);
          }
        };
        var reject = (response) => this.storeErrors({
          errors: response.errors,
          page: page.number,
        });
        Requester.update(
          ApiConstants.submissions.school.update(uuid),
          params,
          resolve,
          reject,
        );
      } else if (target === 'student') {
        var params = { student_submission: attributes };
        var resolve = (response) => {
          var submission = response.student_submission;
          number = forward ? page.number + 1 : page.number - 1;
          if (page.is_last) {
            window.location = RouteConstants.forms.preview(target, submission.uuid);
          } else {
            window.location = RouteConstants.forms.school(number, submission.uuid);
          }
        };
        var reject = (response) => this.storeErrors({
          errors: response.errors,
          page: page.number,
        });
        Requester.update(
          ApiConstants.submissions.student.update(uuid),
          params,
          resolve,
          reject,
        );
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
