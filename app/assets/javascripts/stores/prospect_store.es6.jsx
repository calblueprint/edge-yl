(() => {
  class ProspectStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.overlay = false;
      this.prospect = {
        comments: [],
      };
      this.pairing = null;
      this.template = null;
      this.bindListeners({
        handleCloseOverlay: ProspectActions.CLOSE_OVERLAY,
        handleRemoveComment: ProspectActions.REMOVE_COMMENT,
        handleStoreAttribute: ProspectActions.STORE_ATTRIBUTE,
        handleStoreComment: ProspectActions.STORE_COMMENT,
        handleStoreError: ProspectActions.STORE_ERROR,
        handleStorePairing: ProspectActions.STORE_PAIRING,
        handleStoreProspect: ProspectActions.STORE_PROSPECT,
        handleStoreTemplate: ProspectActions.STORE_TEMPLATE,
        handleStoreValue: ProspectActions.STORE_VALUE,
      });
    }

    // --------------------------------------------------
    // Handlers
    // --------------------------------------------------
    handleCloseOverlay() {
      this.overlay = false;
      this.pairing = null;
      this.template = null;
    }

    handleRemoveComment(response) {
      var comments = this.prospect.comments;
      var id = response.comment.id;
      this.prospect.comments = comments.filter((comment) => comment.id !== id);
    }

    handleStoreAttribute(attribute) {
      this.template.attributes[attribute.key] = attribute.value;
    }

    handleStoreComment(response) {
      this.overlay = false;
      this.prospect.comments.push(response.comment);
    }

    handleStoreError(response) {
      if (this.pairing) {
        this.pairing.errors = response.errors;
      } else if (this.template) {
        this.template.errors = response.errors;
      }
    }

    handleStorePairing(pairing) {
      this.overlay = true;
      this.pairing = pairing;
      this.template = null;
    }

    handleStoreProspect(response) {
      this.overlay = false;
      this.prospect = response.prospect;
    }

    handleStoreTemplate(template) {
      this.overlay = true;
      this.pairing = null;
      this.template = template;
    }

    handleStoreValue(value) {
      this.pairing.value = value;
    }
  }
  this.ProspectStore = alt.createStore(ProspectStore);
})();
