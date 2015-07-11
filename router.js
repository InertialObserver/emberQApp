QuestionApp.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'questions/:question_id'});
  this.resource('new-question');
  this.resource('about');
  this.resource('contact', function() {
<<<<<<< HEAD
  this.resource('email');
  this.resource('fork');
  this.resource('hire');
  this.resource('date');
});

=======
    this.resource('email');
    this.resource('fork');
    this.resource('hire');
    this.resource('date');
  });
  this.resource('author');
>>>>>>> master
  this.resource('question', {path:'questions/:question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('answer', {path: 'answers/:answer_id'});
});
