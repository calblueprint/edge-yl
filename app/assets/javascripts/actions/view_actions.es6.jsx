(() => {
  class ViewActions {

    constructor() {
      this.generateActions(
        'storeMedia'
      );
    }

    attachListener() {
      window.addEventListener(
        'resize',
        () => this.storeMedia(document.documentElement.clientWidth)
      );
      return true;
    }
  }
  this.ViewActions = alt.createActions(ViewActions);
})();
