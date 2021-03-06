(() => {
  class ConferenceActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'removeGroup',
        'removeRoom',
        'storeConference',
        'storeGroup',
        'storeGroupables',
        'storeError',
        'storeRoom',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    assignStudentsToGroups(id){
      var params = { conference_id: id };
      var resolve = (response) => this.storeConference(response);
      var reject = (response) => this.storeError(response);
      var response = confirm('This will reassign ALL students to new groups. ' +
                             'This action cannot be undone.');
      if (response) {
        Requester.update(
          ApiConstants.conferences.assignStudentsToGroups(id),
          params,
          resolve,
          reject,
        );
        return true;
      }
    }

    assignStudentsToRooms(id){
      var params = { conference_id: id };
      var resolve = (response) => this.storeConference(response);
      var reject = (response) => ViewActions.storeToast(true, 'Not enough rooms for students!');
      var response = confirm('This will reassign ALL students to new rooms. ' +
                             'This action cannot be undone.');
      if (response) {
        Requester.update(
          ApiConstants.conferences.assignStudentsToRooms(id),
          params,
          resolve,
          reject,
        );
        return true;
      }
    }

    createGroup(template) {
      var attributes = {
        conference_id: template.attributes.conference_id,
        letter: template.attributes.letter,
        leaderships_attributes: [],
      };
      var leaderships = attributes.leaderships_attributes;
      leaderships.push(template.attributes.primary_leader);
      leaderships.push(template.attributes.secondary_leader);
      var params = { group: attributes };
      var resolve = (response) => {
        this.storeGroup(response);
        ViewActions.storeToast(true, 'Group created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.groups.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    createRoom(template) {
      var params = { room: template.attributes };
      var resolve = (response) => {
        this.storeRoom(response);
        ViewActions.storeToast(true, 'Room created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.rooms.create,
        params,
        resolve,
        reject,
      );
      return true;
    }

    deleteGroup(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var reject = (response) => this.storeError(response);
        var resolve = (response) => {
          this.removeGroup(response);
          this.fetchConference(response.group.conference_id)
          ViewActions.storeToast(true, 'Group removed!');
        };
        Requester.delete(
          ApiConstants.groups.delete(id),
          resolve,
          reject,
        );
      }
      return true;
    }

    deleteRoom(id) {
      var response = confirm('This action cannot be undone.');
      if (response) {
        var reject = (response) => this.storeError(response);
        var resolve = (response) => {
          this.removeRoom(response);
          this.fetchConference(response.room.conference_id)
          ViewActions.storeToast(true, 'Room removed!');
        };
        Requester.delete(
          ApiConstants.rooms.delete(id),
          resolve,
          reject,
        );
      }
      return true;
    }

    exportGroups(conference_id) {
      Requester.csv(ApiConstants.csvs.groups(conference_id), 'groups');
      return true;
    }

    exportRooms(conference_id) {
      Requester.csv(ApiConstants.csvs.rooms(conference_id), 'rooms');
      return true;
    }

    exportStudents(conference_id) {
      Requester.csv(ApiConstants.csvs.students(conference_id), 'students');
      return true;
    }

    fetchConference(id) {
      var resolve = (response) => this.storeConference(response);
      Requester.get(ApiConstants.conferences.show(id), resolve);
      return true;
    }

    updateConference(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { conference: attributes };
      var resolve = (response) => {
        this.storeConference(response);
        ViewActions.storeToast(true, 'Conference updated!');
      };
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.conferences.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
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

    storeTemplate(model, attributes={}) {
      if (model === TypeConstants.models.group) {
        var resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.volunteers.groupables, resolve);
      }
      return {
        attributes: attributes,
        errors: {},
        model: model,
      };
    }
  }
  this.ConferenceActions = alt.createActions(ConferenceActions);
})();
