(() => {
	class PreviewStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.form = {};
      this.bindListeners({
        handleStoreForm: PreviewActions.STORE_FORM,
        handleStoreSubmission: PreviewActions.STORE_SUBMISSION,
      });
    }

    handleStoreSubmission(submission) {
      console.log(submission);
      this.form.pages.map((page) => {
        var questions = page.questions;
        questions.map((question) => {
          var key = question.key;
          if (submission[key]) {
            question.value = submission[key];
          }
        });
      });
    }
    handleStoreForm(response) {
    	this.form = response.form;
    }
	}
  this.PreviewStore = alt.createStore(PreviewStore);
})();
