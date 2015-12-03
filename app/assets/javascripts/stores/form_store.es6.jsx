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
      this.sections[response.section - 1].questions[response.question - 1].value = response.value;
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
