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
    storeToast(active, content, type) {
      if (active) {
        window.setTimeout(() => this.storeToast(false), 3000);
      }
      return {
        active: active,
        content: content,
        type: type,
      };
    }
  }
  this.ViewActions = alt.createActions(ViewActions);
})();
