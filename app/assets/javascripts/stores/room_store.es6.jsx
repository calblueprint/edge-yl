(() => {
  class RoomStore {

    constructor() {
      this.editable = false;
      this.overlay = false;
      this.room = {};
      this.template = {};
      this.bindListeners({
        handleCloseOverlay: RoomActions.CLOSE_OVERLAY,
        handleStoreAttribute: RoomActions.STORE_ATTRIBUTE,
        handleStoreError: RoomActions.STORE_ERROR,
        handleStoreRoom: RoomActions.STORE_ROOM,
        handleStoreTemplate: RoomActions.STORE_TEMPLATE,
        handleToggleEditablity: RoomActions.TOGGLE_EDITABILITY,
      });
    }

    handleCloseOverlay() {
      this.overlay = false;
    }

    handleStoreAttribute(value) {
      this.template.value = value;
    }

    handleStoreError(response) {
      this.template.errors = response.errors;
    }

    handleStoreRoom(response) {
      this.overlay = false;
      this.room = response.room;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.template = template;
    }

    handleToggleEditablity() {
      this.editable = !this.editable;
    }
  }
  this.RoomStore = alt.createStore(RoomStore);
})();
