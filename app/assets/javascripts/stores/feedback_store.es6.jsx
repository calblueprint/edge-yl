(() => {
  class FeedbackStore {

    constructor() {
      this.template = {
        content: '',
        errors: {},
        message: '',
        type: 'entry',
      };
      this.bindListeners({
        handleSaveFeedback: FeedbackActions.SAVE_FEEDBACK,
        handleStoreFeedback: FeedbackActions.STORE_FEEDBACK,
        handleStoreMessage: FeedbackActions.STORE_MESSAGE,
      });
    }

    handleSaveFeedback(feedback) {
      this.template.content = feedback;
    }

    handleStoreMessage(response) {
      this.template.errors = response.errors;
    }

    handleStoreFeedback(response) {
      this.template.type = 'done';
    }
  }
  this.FeedbackStore = alt.createStore(FeedbackStore);
})();
