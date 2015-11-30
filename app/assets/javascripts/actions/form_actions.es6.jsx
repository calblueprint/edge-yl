(() => {
  class FormActions {

    createObject(sections) {
      var attributes = {};
      sections.map(
        (section) => {
          section.questions.map(
            (question) => {
              attributes[question.key] = question.value;
            }
          );
        }
      );
      var params = { student: attributes };
      var resolve = (response) => { console.log(response) };
      Requester.post(ApiConstants.students.create, params, resolve);
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
