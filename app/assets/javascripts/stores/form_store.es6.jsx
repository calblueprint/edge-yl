(() => {
  class FormStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.form = {};
      this.bindListeners({
        handleStoreError: FormActions.STORE_ERROR,
        handleStoreForm: FormActions.STORE_FORM,
        handleStoreSubmission: FormActions.STORE_SUBMISSION,
        handleStoreResponse: FormActions.STORE_RESPONSE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreError(response) {
      var errors = response.errors;
      Object.keys(errors).map((key) => {
        var sections = this.form.sections;
        sections.map((section) => {
          var questions = section.questions;
          questions.map((question) => {
            if (question.key === key) {
              question.errors = errors[key];
            }
          });
        });
      });
    }

    handleStoreForm(response) {
      this.form = response.form;
    }

    handleStoreSubmission(response) {
      console.log(response.submission);
    }

    handleStoreResponse(response) {
      var pages = this.form.pages;
      var page = pages.find((page) => page.id === response.page);
      var questions = page.questions;
      var question = questions.find((question) => question.id === response.question);
      question.value = response.value;
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
