(() => {
  class ViewStore {

    constructor() {
      this.media = 'big';
      this.bindListeners({
        handleStoreMedia: ViewActions.STORE_MEDIA,
      });
    }

    handleStoreMedia(width) {
      if (width >= 992) {
        this.media = 'big';
      } else {
        this.media = 'small';
      }
    }
  }
  this.ViewStore = alt.createStore(ViewStore);
})();
