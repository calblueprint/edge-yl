(() => {
  class ViewStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.editable = false;
      this.media = 'big';
      this.toast = {};
      this.bindListeners({
        handleStoreEditablity: ViewActions.STORE_EDITABILITY,
        handleStoreMedia: ViewActions.STORE_MEDIA,
        handleStoreToast: ViewActions.STORE_TOAST,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreEditablity() {
      this.editable = !this.editable;
    }

    handleStoreMedia(width) {
      if (width >= 912) {
        this.media = 'big';
      } else {
        this.media = 'small';
      }
    }

    handleStoreToast(toast) {
      if (toast.active) {
        this.toast = toast;
      } else {
        this.toast.active = toast.active;
      }
    }
  }
  this.ViewStore = alt.createStore(ViewStore);
})();
