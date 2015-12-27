(() => {
  class ViewStore {

    constructor() {
      this.media = 'big';
      this.bindListeners({
        handleStoreMedia: ViewActions.STORE_MEDIA,
      });
    }

    handleStoreMedia(width) {
      if (width >= 912) {
        this.media = 'big';
      } else {
        this.media = 'small';
      }
    }
  }
  this.ViewStore = alt.createStore(ViewStore);
})();
