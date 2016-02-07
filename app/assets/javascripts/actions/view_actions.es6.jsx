(() => {
  class ViewActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeMedia',
        'toggleEditability',
      );
    }

    // --------------------------------------------------
    // Listeners
    // --------------------------------------------------
    attachListener() {
      window.onresize = () => {
        this.storeMedia(document.documentElement.clientWidth);
      };
      this.storeMedia(document.documentElement.clientWidth);
      return true;
    }
  }
  this.ViewActions = alt.createActions(ViewActions);
})();
