(() => {
  class EmailActions {

    constructor() {
      this.generateActions(
        'storeEmail',
        'storeError',
      );
    }

    fetchEmail(id) {
      var resolve = (response) => this.storeEmail(response);
      Requester.get(ApiConstants.emails.show(id), resolve);
      return true;
    }
  }
  this.EmailActions = alt.createActions(EmailActions);
})();
