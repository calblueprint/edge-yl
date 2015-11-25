(() => {
  class MeActions {

    constructor() {
      this.generateActions(
        'storeMe'
      );
    }

    fetchMe(me) {
      if (!me) {
        resolve = (response) => this.storeMe(response);
        Requester.get(ApiConstants.users.me);
      }
      return true;
    }
  }
  this.MeActions = alt.createActions(MeActions);
})();
