(() => {
  class CheckInStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = {};
      this.firstLoad = true;
      this.query = {};
      this.savedSearch = {};
      this.search = {
        active: false,
        query: '',
      };
      this.student = null;
      this.students = [];
      this.results = [];
      this.bindListeners({
        handleStoreConference: CheckInActions.STORE_CONFERENCE,
        handleStoreStudent: CheckInActions.STORE_STUDENT,
        handleStoreSearch: CheckInActions.STORE_SEARCH,
        handleStoreResults: CheckInActions.STORE_RESULTS,
      });
    }

    // --------------------------------------------------
    // Helpers
    // --------------------------------------------------
    resetSearch() {
      this.search = {
        active: false,
        query: '',
      };
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreConference(conference) {
      this.conference = conference;
    }

    handleStoreResults(response) {
      this.results = response.searchables;
    }

    handleStoreSearch(search) {
      if (search.query === undefined) {
        search.query = this.search.query;
      } else if (search.query === '') {
        search.active = false;
      }
      this.search = search;
    }

    handleStoreStudent(response) {
      this.student = response.student;
      this.resetSearch();
    }
  }
  this.CheckInStore = alt.createStore(CheckInStore);
})();
