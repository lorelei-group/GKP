define([ 'Backbone' ], function(Backbone){

  var ListModel = Backbone.Model.extend({
    defaults: {
      name: "No name"
    }
  });

  return ListModel;
});
