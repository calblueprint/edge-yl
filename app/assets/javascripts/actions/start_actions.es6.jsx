(() => {
  class StartActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeConference',
        'storeErrors',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createSubmission(conference) {
      if (conference) {
        var attributes = { conference_id: conference.id };
        var params = { school_submission: attributes };
        var resolve = (response) => {
          var submission = response.school_submission;
          window.location = RouteConstants.forms.school(1, submission.id);
        };
        Requester.post(
          ApiConstants.submissions.school.create,
          params,
          resolve,
        );
      } else {
        this.storeErrors();
      }
      return true;
    }
  }
  this.StartActions = alt.createActions(StartActions);
})();
