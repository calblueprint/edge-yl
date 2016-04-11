(() => {
  class RoomStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.editable = false;
      this.overlay = false;
      this.room = {
        students: [],
      };
      this.pairing = null;
      this.bindListeners({
        handleCloseOverlay: RoomActions.CLOSE_OVERLAY,
        handleStoreRoom: RoomActions.STORE_ROOM,
        handleStorePairing: RoomActions.STORE_PAIRING,
        handleStoreValue: RoomActions.STORE_VALUE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay(response) {
      this.overlay = false;
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = null;
    }

    handleDeleteStudent(studentId) {
      this.room.students = this.room.students.filter(
        (student) => student.id !== studentId);
    }

    handleStoreError(response) {
      if (this.pairing) {
        this.pairing.errors = response.errors;
      }
    }

    handleStoreRoom(response) {
      this.overlay = false;
      this.room = response.room;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.RoomStore = alt.createStore(RoomStore);
})();
