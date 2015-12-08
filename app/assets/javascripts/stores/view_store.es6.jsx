(() => {
  class ViewStore {

    constructor() {
      this.media = 'large';
      this.bindListeners({
        handleStoreMedia: ViewActions.STORE_MEDIA,
      });
    }

    handleStoreMedia(width) {
      if (width >= 1200) {
        this.media = 'large';
      } else if (width >= 992) {
        this.media = 'medium';
      } else {
        this.media = 'small';
      }
    }
  }
  this.ViewStore = alt.createStore(ViewStore);
})();
