(() => {
  class FormStore {

    constructor() {
      this.sections = [
        {
          id: 1,
          title: 'Basic Information',
          questions: [
            {
              id: 1,
              label: 'First Name',
              placeholder: 'Kira',
              type: 'field',
              value: '',
            },
            {
              id: 2,
              label: 'Last Name',
              placeholder: 'Klapper',
              type: 'field',
              value: '',
            },
          ],
        },
      ];
      this.bindListeners({
        handleStoreResponse: FormActions.STORE_RESPONSE,
      });
    }

    handleStoreResponse(response) {
      this.sections[response.section - 1].questions[response.question - 1].value = response.value;
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
