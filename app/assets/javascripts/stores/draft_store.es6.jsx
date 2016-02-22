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
        saving: false,
      };
      this.bindListeners({
        handleInitializeDraft: DraftActions.INITIALIZE_DRAFT,
        handleStoreAttribute: DraftActions.STORE_ATTRIBUTE,
        handleStoreDraft: DraftActions.STORE_DRAFT,
        handleStoreErrors: DraftActions.STORE_ERRORS,
        handleUpdateDraft: DraftActions.UPDATE_DRAFT,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleInitializeDraft(response) {
      var draft = response.email;
      this.draft = draft;
      this.template.attributes = {
        id: draft.id,
        content: draft.content,
        subject: draft.subject,
        to: draft.to,
        updated_at: draft.updated_at,
      };
      this.template.saving = false;
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreDraft(response) {
      Object.assign(this.draft, this.template.attributes);
      this.template.attributes.updated_at = response.email.updated_at;
      this.template.saving = false;
    }

    handleStoreErrors(response) {
      this.template.errors = response.errors;
    }

    handleUpdateDraft() {
      this.template.saving = true;
    }
  }
  this.DraftStore = alt.createStore(DraftStore);
})();
