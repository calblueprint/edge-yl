(() => {
  class ViewStore {

    constructor() {
      this.media = 'large';
      this.bindListeners({
        handleStoreMedia: StudentActions.STORE_COMMENT,
      });
    }

    handleStoreMedia(width) {
      this.media = width;
    }
  }
  this.ViewStore = alt.createStore(ViewStore);
})();
