QuestionApp.Question = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
