(() => {
  class SubmissionActions {

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
    fetchForm(id) {
      var resolve = (response) => {
        this.storeForm(response);
        this.fetchSubmission('student', id);
      }
      Requester.get(
        ApiConstants.forms.show('student'),
        resolve,
      );
      return true;
    }

    fetchSubmission(id) {
      var resolve = (response) => this.storeSubmission({
        submission: response.student_submission,
      });
      Requester.get(
        ApiConstants.submissions.student.show(id),
        resolve,
      );
      return true;
    }
  }
  this.SubmissionActions = alt.createActions(SubmissionActions);
})();
