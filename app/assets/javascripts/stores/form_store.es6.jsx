(() => {
  class FormStore {

    constructor() {
      this.form = {};
      this.bindListeners({
        handleStoreForm: FormActions.STORE_FORM,
        handleStoreResponse: FormActions.STORE_RESPONSE,
      });
    }

    handleStoreForm(response) {
      this.form = response.form;
    }

    handleStoreResponse(response) {
      var sections = this.form.sections;
      var section = sections.filter((section) => section.id === response.section)[0];
      var questions = section.questions;
      var question = questions.filter((question) => question.id === response.question)[0];
      question.value = response.value;
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
