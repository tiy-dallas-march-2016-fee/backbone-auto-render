if (window.Autorender === undefined) { window.Autorender = {}; }

(function(context) {

  var DisplayView = Backbone.View.extend({

    initialize: function() {
      this.listenTo(this.model, 'change', function() {
        this.render();
      });
    },

    render: function() {
      var templateText = $('#comment-template').html();
      var templateFunc = _.template(templateText);
      var html = templateFunc({name: this.model.get('name'), title: this.model.get('title'), comment: this.model.get('comment')});
      $('#display-view').html(html);
      return this;
    }


  });


  context.DisplayView = DisplayView;

})(window.Autorender);
