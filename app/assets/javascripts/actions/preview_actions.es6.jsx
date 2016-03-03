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
    submitSubmission(target, uuid) {
      var attributes = {};
      attributes.is_draft = false;
      var resolve = (response) => {
        window.location = RouteConstants.forms.success(target, uuid);
      }

      if (target === 'school') {
        var params = { school_submission: attributes };
        Requester.update(
          ApiConstants.submissions.school.update(uuid),
          params,
          resolve,
        );
      } else if (target === 'student') {
        var params = { student_submisssion: attributes };
        Requester.update(
          ApiConstants.submissions.student.update(uuid),
          params,
          resolve,
        );
      }
      window.location = RouteConstants.forms.success(target, uuid);
    }

    fetchForm(target, uuid) {
      var resolve = (response) => {
        this.storeForm(response);
        this.fetchSubmission(target, uuid);
      }
      Requester.get(
        ApiConstants.forms.show(target),
        resolve,
      );
      return true;
    }

    fetchSubmission(target, uuid) {
        if (target === 'school') {
        var resolve = (response) => this.storeSubmission(response.school_submisssion);
        Requester.get(
          ApiConstants.submissions.school.show(uuid),
          resolve,
        );
      } else if (target === 'student') {
        var resolve = (response) => this.storeSubmission(response.student_submission);
        Requester.get(
          ApiConstants.submissions.student.show(uuid),
          resolve,
        );
      }
    }
  }
  this.PreviewActions = alt.createActions(PreviewActions);
})();
