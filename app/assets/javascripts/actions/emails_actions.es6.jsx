(() => {
  class EmailsActions {

    constructor() {
      this.generateActions(
        'storeEmails',
      );
    }

    fetchEmails() {
      var resolve = (response) => this.storeEmails(response);
      Requester.get(ApiConstants.emails.index, resolve);
      return true;
    }
  }
  this.EmailsActions = alt.createActions(EmailsActions);
})();
