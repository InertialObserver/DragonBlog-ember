DragonBlog.NewPostController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body')
      });
      // newPost.title = this.get('title');
      // newPost.body = this.get('body');
      // this.set('title', '');
      // this.set('body', '');
      newPost.save();
      this.transitionToRoute('posts');
    }
  }
});
