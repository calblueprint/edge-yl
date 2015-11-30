(() => {
  class UserStore {

    constructor() {
      this.overlay = {
        active: false,
        target: '',
        type: '',
      };
      this.sidebar = true;
      this.user = {
        responsibilities: {},
      };
      this.bindListeners({
        handleStoreComment: UserActions.STORE_COMMENT,
        handleStoreComments: UserActions.STORE_COMMENTS,
        handleStoreOverlay: UserActions.STORE_OVERLAY,
        handleStoreUser: UserActions.STORE_STUDENT,
        handleToggleSidebar: UserActions.TOGGLE_SIDEBAR,
      });
    }

    handleStoreComment(response) {
      this.comments.push(response.comment);
      this.overlay.active = false;
    }

    handleStoreComments(response) {
      this.comments = response.comments;
    }

    handleStoreOverlay(overlay) {
      this.overlay = overlay;
    }

    handleStoreStudent(response) {
      this.student = response.student;
      this.overlay.active = false;
    }

    handleToggleSidebar() {
      this.sidebar = !this.sidebar;
    }
  }
  this.UserStore = alt.createStore(UserStore);
})();
