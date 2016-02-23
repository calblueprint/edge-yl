(() => {
  class FeedbackActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeFeedback',
        'storeMessage',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createFeedback(template, attributes={}) {
      Object.assign(attributes, template.attributes);
      var params = { feedback: attributes };
      var resolve = (response) => this.storeFeedback(response);
      Requester.post(
        ApiConstants.feedbacks.create,
        params,
        resolve,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storeAttribute(key, value) {
      return {
        key: key,
        value: value,
      };
    }
  }
  this.FeedbackActions = alt.createActions(FeedbackActions);
})();
