DragonBlog.AboutController = Ember.Controller.extend ({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert('the Dragon is also known as Donkeys Wife');
    },
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }
});
