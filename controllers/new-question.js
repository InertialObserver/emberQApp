QuestionApp.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        body: this.get('description')
      });
      newQuestion.title = this.get('title');
      newQuestion.description = this.get('description');
      this.set('title', '');
      this.set('description', '');
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
