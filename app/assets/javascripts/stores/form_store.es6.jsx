(() => {
  class FormStore {

    constructor() {
      this.sections = [
        {
          title: 'Basic Information',
          questions: [
            {
              label: 'First Name',
              placeholder: 'Kira',
              type: 'field',
              value: '',
            },
            {
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
      console.log(response);
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
