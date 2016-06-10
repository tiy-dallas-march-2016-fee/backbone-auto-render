if (window.Autorender === undefined) { window.Autorender = {}; }

(function(context) {

  console.log('app.js', context);

  var model = new context.CommentModel();

  var formView = new context.FormView({ el: $('#form-view'), model: model});
  var displayView = new context.DisplayView({ el: $('#display-view'), model: model});

})(window.Autorender);
