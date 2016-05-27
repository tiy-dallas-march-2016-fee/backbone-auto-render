if (window.Autorender === undefined) { window.Autorender = {}; }

(function(context) {

  var FormView = Backbone.View.extend({

    initialize: function() {
      
   },

    events: {
      'keyup #name': 'grabName',
      'keyup #title': 'grabTitle',
      'keyup #comment': 'grabComment'
    },


    grabName: function(evt) {
      if (evt.keyCode === 13) {
        var name = evt.target.value;
        this.$('#name').val('');
        this.model.set('name', name)
      }
    },

    grabTitle: function(evt) {
      if (evt.keyCode === 13) {
        var title = evt.target.value;
        this.$('#title').val('');
        this.model.set('title', title)
      }
    },

    grabComment: function(evt) {
      if (evt.keyCode === 13) {
        var comment = evt.target.value;
        this.$('#comment').val('');
        this.model.set('comment', comment);
      }
    }
  });



  window.Autorender.FormView = FormView;

})(window.Autorender);
