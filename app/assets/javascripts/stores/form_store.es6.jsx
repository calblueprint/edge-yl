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
              key: 'first_name',
              label: 'First Name',
              placeholder: 'Kira',
              type: 'field',
              value: '',
            },
            {
              id: 2,
              key: 'last_name',
              label: 'Last Name',
              placeholder: 'Klapper',
              type: 'field',
              value: '',
            },
            {
              id: 3,
              key: 'email',
              label: 'Email',
              placeholder: 'kiraklapper@dmail.com',
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
