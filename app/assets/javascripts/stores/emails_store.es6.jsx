(() => {
  class EmailsStore {

    constructor() {
      this.emails = [];
      this.bindListeners({
        handleStoreEmails: EmailsActions.STORE_EMAILS,
      });
    }

    handleStoreEmails(response) {
      this.emails = response.emails;
    }
  }
  this.EmailsStore = alt.createStore(EmailsStore);
})();
