if (window.Autorender === undefined) { window.Autorender = {}; }

(function(context) {

  var FormView = Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    events: {
      "keyup input" : "inputChanged",
      "keyup textArea" : "inputChanged"
    },

    inputChanged: function(evt) {
      var nameInput = this.$("#name").val();
      this.model.set({name: nameInput});
      var titleInput = this.$("#title").val();
      this.model.set({title: titleInput});
      var commentInput = this.$("#comment").val();
      this.model.set({comment: commentInput});
      console.log("name value:", nameInput);
      console.log("title:", titleInput);
      console.log("comment:", commentInput);

    },

    render: function() {
      console.log("Is this working?");
    }
  });

  window.Autorender.FormView = FormView;

})(window.Autorender);
