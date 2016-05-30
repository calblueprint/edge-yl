(() => {
  class CheckinActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeConference',
        'storeResults',
        'storeStudent',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    checkinStudent(studentId) {
      var conference = CheckinStore.getState().conference;
      var resolve = (response) => {
        this.fetchConference(conference.id);
        this.storeStudent(response);
        ViewActions.storeToast(true, 'Student checked in!');
      };
      var reject = (response) => CheckinActions.storeError(response);
      Requester.update(
        ApiConstants.students.checkin(studentId),
        {},
        resolve,
        reject,
      );
      return true;
    }

    fetchConference(id) {
      var resolve = (response) => this.storeConference(response);
      Requester.get(ApiConstants.conferences.show(id), resolve);
      return true;
    }

    fetchStudent(id) {
      var resolve = (response) => this.storeStudent(response);
      Requester.get(
        ApiConstants.students.show(id),
        resolve,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeSearch(active, conferenceId, query) {
      if (query) {
        var resolve = (response) => this.storeResults(response);
        Requester.get(
          ApiConstants.searchables.checkin(conferenceId, query),
          resolve,
        );
      }
      return {
        active: active,
        query: query,
      };
    }
  }
  this.CheckinActions = alt.createActions(CheckinActions);
})();
