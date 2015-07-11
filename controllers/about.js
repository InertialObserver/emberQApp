QuestionApp.AboutController = Ember.Controller.extend ({
  isPictureShowing: false,
<<<<<<< HEAD
  actions: {
    showRealName: function() {
      alert('Question Guru');
    },
=======

>>>>>>> master
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
<<<<<<< HEAD
  }
=======
>>>>>>> master
});
