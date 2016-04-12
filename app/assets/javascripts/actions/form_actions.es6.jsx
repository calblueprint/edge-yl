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
    fetchForm(target, page, id) {
      var resolve = (response) => {
        this.storeForm(response);
        this.fetchSubmission(page, target, id);
      };
      Requester.get(ApiConstants.forms.show(target), resolve);
      return true;
    }

    fetchSubmission(page, target, id) {
      if (id) {
        if (target === 'school') {
          var resolve = (response) => this.storeSubmission({
            page: page,
            submission: response.school_submission,
          });
          Requester.get(
            ApiConstants.submissions.school.show(id),
            resolve,
          );
        } else if (target === 'student') {
          var resolve = (response) => this.storeSubmission({
            page: page,
            submission: response.student_submission,
          });
          Requester.get(
            ApiConstants.submissions.student.show(id),
            resolve,
          );
        }
      }
      return true;
    }

    updateSubmission(page, target, id, forward) {
      var attributes = {};
      var questions = page.questions;
      questions.map((question) => attributes[question.key] = question.value);
      attributes.current_page = page.number;
      if (target === 'school') {
        var params = { school_submission: attributes };
        var resolve = (response) => {
          this.storeErrors({
            errors: {},
            page: page.number,
          });
          var number = forward ? page.number + 1 : page.number - 1;
          if (page.is_last && forward) {
            window.location = RouteConstants.forms.preview(target, id);
          } else {
            window.location = RouteConstants.forms.school(number, id);
          }
        };
        var reject = (response) => {
          if (forward) {
            this.storeErrors({
              errors: response.errors,
              page: page.number,
            });
          } else {
            var number = page.number - 1;
            window.location = RouteConstants.forms.school(number, id);
          }
        };
        Requester.update(
          ApiConstants.submissions.school.update(id),
          params,
          resolve,
          reject,
        );
      } else if (target === 'student') {
        var params = { student_submission: attributes };
        var resolve = (response) => {
          number = forward ? page.number + 1 : page.number - 1;
          if (page.is_last && forward) {
            window.location = RouteConstants.forms.preview(target, id);
          } else {
            window.location = RouteConstants.forms.student(number, id);
          }
        };
        var reject = (response) => {
          if (forward) {
            this.storeErrors({
              errors: response.errors,
              page: page.number,
            });
          } else {
            var number = page.number - 1;
            window.location = RouteConstants.forms.student(number, id);
          }
        };
        Requester.update(
          ApiConstants.submissions.student.update(id),
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
