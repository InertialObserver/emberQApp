QuestionApp.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt('Type your secret message to me here:');
      this.set('messageSent', true);
    }
  } 
});
