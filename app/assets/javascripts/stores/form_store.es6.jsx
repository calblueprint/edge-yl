(() => {
  class FormStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.errors = false;
      this.form = {};
      this.bindListeners({
        handleStoreErrors: FormActions.STORE_ERRORS,
        handleStoreForm: FormActions.STORE_FORM,
        handleStoreSubmission: FormActions.STORE_SUBMISSION,
        handleStoreResponse: FormActions.STORE_RESPONSE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreErrors(response) {
      var errors = response.errors;
      var page = response.page;
      var questions = this.form.pages[page - 1].questions;
      var count = 0;
      questions.map((question) => {
        var key = question.key;
        if (errors[key]) {
          count += 1;
          question.error = errors[key][0];
        } else {
          delete question.error;
        }
      });
      this.errors = count > 0 ? true : false;
    }

    handleStoreForm(response) {
      this.form = response.form;
    }

    handleStoreSubmission(response) {
      var page = response.page;
      var submission = response.submission;
      var questions = this.form.pages[page - 1].questions;
      questions.map((question) => {
        var key = question.key;
        if (submission[key] !== undefined) {
          if (question.style === TypeConstants.questions.checkbox) {
            if (submission[key] === null || submission[key] === undefined) {
              question.value = [];
            } else {
              question.value = submission[key].split(',');
            }
          } else {
            question.value = submission[key];
          }
        }
      });
    }

    handleStoreResponse(response) {
      var pages = this.form.pages;
      var page = pages.find((page) => page.id === response.page);
      var questions = page.questions;
      var question = questions.find((question) => question.id === response.question);
      var value = response.value;
      if (question.style === TypeConstants.questions.checkbox) {
        if (question.value === null) {
          question.value = [value];
        } else {
          if (question.value.indexOf(value) === -1) {
            question.value.push(value);
          } else {
            question.value = question.value.filter((option) => option !== value);
          }
        }
      } else {
        question.value = response.value;
      }
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
