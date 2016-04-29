(() => {
  class GroupStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.group = {
        conference: {},
        leaderships: [],
        students: [],
      };
      this.groupables = [];
      this.overlay = false;
      this.pairing = null;
      this.results = [];
      this.savedSearch = {};
      this.search = {
        active: false,
        query: '',
      };
      this.template = {};
      this.bindListeners({
        handleAddStudent: GroupActions.ADD_STUDENT,
        handleCloseOverlay: GroupActions.CLOSE_OVERLAY,
        handleStoreError: GroupActions.STORE_ERROR,
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreGroupables: GroupActions.STORE_GROUPABLES,
        handleStoreLeadership: GroupActions.STORE_LEADERSHIP,
        handleStorePairing: GroupActions.STORE_PAIRING,
        handleStoreSearch: GroupActions.STORE_SEARCH,
        handleStoreStudentSearch: GroupActions.STORE_STUDENT_SEARCH,
        handleStoreResults: GroupActions.STORE_RESULTS,
        handleStoreValue: GroupActions.STORE_VALUE,
        handleDeleteStudent: GroupActions.DELETE_STUDENT,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleAddStudent(response) {
      this.overlay = false;
    }

    handleCloseOverlay() {
      this.overlay = false;
      this.pairing = null;
      this.template = null;
    }

    handleDeleteStudent(studentId) {
      this.group.students = this.group.students.filter(
        (student) => student.id !== studentId);
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreError(response) {
      if (this.pairing) {
        this.pairing.errors = response.errors;
      } else if (this.template) {
        this.template.errors = response.errors;
      }
    }

    handleStoreGroup(response) {
      this.group = response.group;
      this.overlay = false;
    }

    handleStoreGroupables(response) {
      this.groupables = response.volunteers;
    }

    handleStoreLeadership(response) {
      this.group.leaderships.map((leadership) => {
        if (leadership.id === response.leadership.id) {
          leadership.volunteer = response.leadership.volunteer;
        }
      });
      this.overlay = false;
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.savedSearch = {};
      this.search = {
        active: false,
        query: '',
      };
      this.template = null;
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

    handleStoreStudentSearch(student) {
      this.savedSearch = student;
      this.search = {
        active: false,
        query: student.content,
      };
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.pairing = null;
      this.template = template;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.GroupStore = alt.createStore(GroupStore);
})();
