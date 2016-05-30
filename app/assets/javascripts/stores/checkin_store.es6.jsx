(() => {
  class CheckinStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.conference = {};
      this.conferences = {};
      this.firstLoad = true;
      this.pagination = {
        current: 1,
        limit: 1,
      };
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
        handleStoreConference: CheckinActions.STORE_CONFERENCE,
        handleStoreStudent: CheckinActions.STORE_STUDENT,
        handleStoreSearch: CheckinActions.STORE_SEARCH,
        handleStoreResults: CheckinActions.STORE_RESULTS,
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
    handleStoreConference(response) {
      this.conference = response.conference;
      if (this.firstLoad) {
        this.firstLoad = false;
        window.history.replaceState(
          { conference: this.conference, },
          null,
          RouteConstants.pages.checkin(this.conference.id),
        );
      } else {
        window.history.pushState(
          { conference: this.conference, },
          null,
          RouteConstants.pages.checkin(this.conference.id),
        );
      }
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
  this.CheckinStore = alt.createStore(CheckinStore);
})();
