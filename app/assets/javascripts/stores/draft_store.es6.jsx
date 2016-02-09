(() => {
  class DraftStore {

    constructor() {
      this.draft = {};
      this.template = {
        attributes: {},
        errors: {},
        saved: '',
      };
      this.bindListeners({
        handleStoreAttribute: DraftActions.STORE_ATTRIBUTE,
        handleStoreDraft: DraftActions.STORE_DRAFT,
        handleStoreErrors: DraftActions.STORE_ERRORS,
      });
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreDraft(response) {
      this.draft = response.email;
      this.template.attributes = {
        id: response.email.id,
        content: response.email.content,
        subject: response.email.subject,
        to: response.email.to,
      };
      this.template.saved = "Saved Draft at: " + response.email.updated_at;


    }

    handleStoreErrors(response) {
      this.template.errors = response.errors;
    }
  }
  this.DraftStore = alt.createStore(DraftStore);
})();
