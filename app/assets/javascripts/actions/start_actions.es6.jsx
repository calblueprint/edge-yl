(() => {
  class StartActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'storeConference',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    createComment(template) {
      var params = { comment: template.attributes };
      var resolve = (response) => {
        this.storeComment(response);
        ViewActions.storeToast(true, 'Comment created!');
      };
      var reject = (response) => this.storeError(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.StartActions = alt.createActions(StartActions);
})();
