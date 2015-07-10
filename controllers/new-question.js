QuestionApp.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        description: this.get('description'),
        author: this.get('author')
      });

      this.set('title', '');
      this.set('description', '');
      this.set('author', '');
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
