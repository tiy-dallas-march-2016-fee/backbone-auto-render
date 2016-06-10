if (window.Autorender === undefined) { window.Autorender = {}; }

(function(context) {

  var FormView = Backbone.View.extend({

    events: {
      "keyup input" : "inputChanged",
      "keyup textarea" : "inputChanged"
    },

    inputChanged: function() {
      var nameInput = this.$("#name").val();
      var titleInput = this.$("#title").val();
      var commentInput = this.$("#comment").val();
      this.model.set({name: nameInput, title: titleInput, comment: commentInput});
    }
  });

  window.Autorender.FormView = FormView;

})(window.Autorender);
