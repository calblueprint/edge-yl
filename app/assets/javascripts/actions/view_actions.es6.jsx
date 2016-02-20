(() => {
  class ViewActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeEditability',
        'storeMedia',
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

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeToast(message) {
      if (message) {
        window.setTimeout(() => this.storeToast(null), 3000);
      }
      console.log('sup');
      return message;
    }
  }
  this.ViewActions = alt.createActions(ViewActions);
})();
