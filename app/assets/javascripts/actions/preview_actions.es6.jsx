(() => {
  class PreviewActions {

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
    fetchForm(target, id) {
      var resolve = (response) => {
        this.storeForm(response);
        this.fetchSubmission(target, id);
      }
      Requester.get(
        ApiConstants.forms.show(target),
        resolve,
      );
      return true;
    }

    fetchSubmission(target, id) {
        if (target === 'school') {
        var resolve = (response) => this.storeSubmission({
          submission: response.school_submission,
        });
        Requester.get(
          ApiConstants.submissions.school.show(id),
          resolve,
        );
      } else if (target === 'student') {
        var resolve = (response) => this.storeSubmission({
          submission: response.student_submission,
        });
        Requester.get(
          ApiConstants.submissions.student.show(id),
          resolve,
        );
      }
      return true;
    }

    submitSubmission(target, id) {
      var attributes = {};
      attributes.is_draft = false;
      var resolve = (response) => {
        window.location = RouteConstants.forms.success(target, id);
      };
      if (target === 'school') {
        var params = { school_submission: attributes };
        var resolve =
        Requester.update(
          ApiConstants.submissions.school.update(id),
          params,
          resolve,
        );
      } else if (target === 'student') {
        var params = { student_submission: attributes };
        Requester.update(
          ApiConstants.submissions.student.update(id),
          params,
          resolve,
        );
      }
      return true;
    }
  }
  this.PreviewActions = alt.createActions(PreviewActions);
})();
