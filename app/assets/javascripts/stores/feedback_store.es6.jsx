(() => {
  class FeedbackStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.template = {
        attributes: {},
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: FeedbackActions.STORE_ATTRIBUTE,
        handleStoreFeedback: FeedbackActions.STORE_FEEDBACK,
        handleStoreMessage: FeedbackActions.STORE_MESSAGE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreMessage(response) {
      this.template.errors = response.errors;
    }

    handleStoreFeedback(response) {
      window.location = RouteConstants.pages.feedback;
    }
  }
  this.FeedbackStore = alt.createStore(FeedbackStore);
})();
