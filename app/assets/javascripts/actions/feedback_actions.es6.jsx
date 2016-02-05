(() => {
  class FeedbackActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'saveFeedback',
        'storeFeedback',
        'storeMessage',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createFeedback(template, profile) {
      var params = {
        content: template.content,
        user_id: profile.id,
      };
      var resolve = (response) => { this.storeFeedback(response); };
      var reject = (response) => { this.storeMessage(response); }
      Requester.post(
        ApiConstants.feedbacks.create,
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.FeedbackActions = alt.createActions(FeedbackActions);
})();
