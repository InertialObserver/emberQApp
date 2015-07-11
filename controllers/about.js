QuestionApp.AboutController = Ember.Controller.extend ({
  isPictureShowing: false,

    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
});
