QuestionApp.QuestionController = Ember.ObjectController.extend ({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);
      var myQuestion = this.get('model');
      myQuestion.save();
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        var thisQuestion = this.get('model');
        thisQuestion.deleteRecord();
        thisQuestion.save();
        this.transitionToRoute('questions');
      }
    }
  }
});
