(() => {
  class MeActions {

    constructor() {
      this.generateActions(
        'storeMe'
      );
    }

    fetchMe(me) {
      if (me.empty) {
        resolve = (response) => this.storeMe(response);
        Requester.get(ApiConstants.users.me, resolve);
      }
      return true;
    }
  }
  this.MeActions = alt.createActions(MeActions);
})();
