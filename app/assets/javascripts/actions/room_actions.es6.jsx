(() => {
  class RoomActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeEditability',
        'storeError',
        'storeRoom',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    deleteStudent(roomId, studentId) {
      var response = confirm('This action removes the student from the room. ' +
                              'It does not delete the student.');
      if (response) {
        var attributes = { room_id : null };
        var params = { student: attributes };
        var reject = (response) => this.storeError(response);
        var resolve = (response) => {
          this.fetchRoom(roomId);
          ViewActions.storeToast(true, 'Student removed!');
        };
        Requester.update(
          ApiConstants.students.update(studentId),
          params,
          resolve,
          reject,
        );
        return studentId;
      }
    }

    exportRoom(id) {
      Requester.csv(ApiConstants.csvs.room(id), 'room');
      return true;
    }

    fetchRoom(id) {
      var resolve = (response) => this.storeRoom(response);
      Requester.get(ApiConstants.rooms.show(id), resolve);
      return true;
    }

    storePairing(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        type: options.type,
        value: options.value,
      };
    }

    updateRoom(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { room: attributes };
      var resolve = (response) => {
        this.storeRoom(response);
        ViewActions.storeToast(true, 'Room updated!');
      };
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.rooms.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.RoomActions = alt.createActions(RoomActions);
})();

