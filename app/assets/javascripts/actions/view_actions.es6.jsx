(() => {
  class ViewActions {

    constructor() {
      this.generateActions(
        'storeMedia',
        'toggleEditability',
      );
    }

    attachListener() {
      window.addEventListener(
        'resize',
        () => this.storeMedia(document.documentElement.clientWidth)
      );
      this.storeMedia(document.documentElement.clientWidth);
      return true;
    }
  }
  this.ViewActions = alt.createActions(ViewActions);
})();
