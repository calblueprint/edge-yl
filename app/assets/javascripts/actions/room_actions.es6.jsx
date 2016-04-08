(() => {
  class RoomActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeRoom',
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
        var resolve = (response) => {
          this.fetchRoom(roomId);
          ViewActions.storeToast(true, 'Student removed!');
        };
        Requester.update(
          ApiConstants.students.update(studentId),
          params,
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
  }
  this.RoomActions = alt.createActions(RoomActions);
})();

