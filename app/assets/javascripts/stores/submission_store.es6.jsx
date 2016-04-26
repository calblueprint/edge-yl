(() => {
  class StudentSubmissionStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.form = {};
      this.bindListeners({
        handleStoreForm: StudentSubmissionActions.STORE_FORM,
        handleStoreSubmission: StudentSubmissionActions.STORE_SUBMISSION,
      });
    }

    handleStoreSubmission(response) {
      var submission = response.submission;
      this.form.pages.map((page) => {
        var infoQuestions = new Set();
        var questions = page.questions;
        questions.map((question) => {
          if (question.style === TypeConstants.questions.information) {
            infoQuestions.add(question.key);
          }
        });
        questions.map((question) => {
          var key = question.key;
          if (submission[key] !== undefined) {
            if (infoQuestions.has(question.key + '_info')) {
              question.title = question.description;
            } else if (question.style === TypeConstants.questions.checkbox) {
              if (submission[key] === null || submission[key] === undefined) {
                question.value = [];
              } else {
                question.value = submission[key].split(',').join(', ');
              }
            } else {
              question.value = submission[key];
            }
          }
        });
      });
    }

    handleStoreForm(response) {
      this.form = response.form;
    }
  }
  this.StudentSubmissionStore = alt.createStore(StudentSubmissionStore);
})();
