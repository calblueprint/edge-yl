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
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: GroupActions.CLOSE_OVERLAY,
        handleStoreError: GroupActions.STORE_ERROR,
        handleStoreGroup: GroupActions.STORE_GROUP,
        handleStoreGroupables: GroupActions.STORE_GROUPABLES,
        handleStoreLeadership: GroupActions.STORE_LEADERSHIP,
        handleStorePairing: GroupActions.STORE_PAIRING,
        handleStoreValue: GroupActions.STORE_VALUE,
        handleDeleteStudent: GroupActions.DELETE_STUDENT,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.pairing = null;
      this.template = null;
    }

    handleDeleteStudent(studentId) {
      this.group.students = this.group.students.filter(function(student) { return student.id != studentId });
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
      this.groupables = response.users;
    }

    handleStoreLeadership(response) {
      this.group.leaderships.map((leadership) => {
        if (leadership.id === response.leadership.id) {
          leadership.user = response.leadership.user;
        }
      });
      this.overlay = false;
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = null;
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
