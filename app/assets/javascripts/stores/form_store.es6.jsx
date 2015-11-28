(() => {
  class FormStore {

    constructor() {
      this.sections = [
        {
          title: 'Basic Information',
          questions: [
            {
              label: 'First Name',
              type: 'field',
              value: '',
            },
            {
              label: 'Last Name',
              type: 'field',
              value: '',
            },
          ],
        },
      ];
    }
  }
  this.FormStore = alt.createStore(FormStore);
})();
