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
      this.results = [];
      this.search = {
        active: false,
        query: '',
      };
      this.student = null;
      this.students = [];
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
      this.results = [];
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
      if (response.searchables.length > 0) {
        this.student = null;
      }
      this.results = response.searchables;
    }

    handleStoreSearch(search) {
      if (search.query === undefined) {
        if (this.search.query === '') {
          search.query = '';
        } else {
          search.query = this.search.query;
        }
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
