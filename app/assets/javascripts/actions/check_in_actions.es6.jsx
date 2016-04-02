(() => {
  class CheckInActions {

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
        Requester.get(ApiConstants.searchables.check_in(conferenceId, query), resolve);
      }
      return {
        active: active,
        query: query,
      };
    }
  }
  this.CheckInActions = alt.createActions(CheckInActions);
})();
