(() => {
  class FeedbackStore {

    constructor() {
      this.template = {
        message: '',
        type: 'entry',
        errors: {},
        content: '',
      };
      this.bindListeners({
        handleStoreFeedback: FeedbackActions.STORE_FEEDBACK,
        handleStoreMessage: FeedbackActions.STORE_MESSAGE,
        handleSaveFeedback: FeedbackActions.SAVE_FEEDBACK,
      });
    }


    handleStoreMessage(response) {
      this.template.errors = response.errors;
    }

    handleStoreFeedback(response) {
      this.template.type = 'done';
    }
    handleSaveFeedback(feedback) {
      this.template.content = feedback;
    }
  }
  this.FeedbackStore = alt.createStore(FeedbackStore);
})();
