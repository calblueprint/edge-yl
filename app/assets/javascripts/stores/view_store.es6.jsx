(() => {
  class ViewStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.editable = false;
      this.media = 'big';
      this.bindListeners({
        handleStoreMedia: ViewActions.STORE_MEDIA,
        handleStoreEditablity: ViewActions.STORE_EDITABILITY,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreMedia(width) {
      if (width >= 912) {
        this.media = 'big';
      } else {
        this.media = 'small';
      }
    }

    handleStoreEditablity() {
      this.editable = !this.editable;
    }
  }
  this.ViewStore = alt.createStore(ViewStore);
})();
