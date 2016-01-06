(() => {
  class FormActions {

    constructor() {
      this.generateActions(
        'storeError',
        'storeForm',
        'storeObject',
      );
    }

    createObject(form) {
      var attributes = {};
      form.sections.map(
        (section) => {
          section.questions.map(
            (question) => {
              attributes[question.key] = question.value;
            }
          );
        }
      );
      var params = {};
      params[form.target] = attributes;
      var resolve = (response) => this.storeObject(response);
      var reject = (response) => this.storeError(response);
      var route = (form.target === 'school') ?
                  ApiConstants.schools.create :
                  ApiConstants.students.create;
      Requester.post(
        route,
        params,
        resolve,
        reject,
      );
      return true;
    }

    fetchForm(id) {
      var resolve = (response) => this.storeForm(response);
      Requester.get(ApiConstants.forms.show(id), resolve);
      return true;
    }

    storeResponse(section, question, value) {
      return {
        question: question,
        section: section,
        value: value,
      };
    }
  }
  this.FormActions = alt.createActions(FormActions);
})();
