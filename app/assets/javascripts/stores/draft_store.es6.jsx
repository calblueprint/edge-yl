(() => {
  class DraftStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.draft = {};
      this.template = {
        attributes: {},
        errors: {},
      };
      this.bindListeners({
        handleStoreAttribute: DraftActions.STORE_ATTRIBUTE,
        handleStoreDraft: DraftActions.STORE_DRAFT,
        handleStoreErrors: DraftActions.STORE_ERRORS,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreDraft(response) {
      var draft = response.email;
      this.draft = draft;
      this.template.attributes = {
        id: draft.id,
        content: draft.content,
        subject: draft.subject,
        to: draft.to,
        updated_at: draft.updated_at,
      };
    }

    handleStoreErrors(response) {
      this.template.errors = response.errors;
    }
  }
  this.DraftStore = alt.createStore(DraftStore);
})();
