(() => {
  class DraftStore {

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

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreDraft(response) {
      this.draft = response.email;
      this.template.attributes = {
        content: response.email.content,
        subject: response.email.subject,
        to: response.email.to,
      };


    }

    handleStoreErrors(response) {
      this.template.errors = response.errors;
    }
  }
  this.DraftStore = alt.createStore(DraftStore);
})();
