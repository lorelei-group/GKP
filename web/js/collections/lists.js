define([
  'Backbone',
  'models/list'
], function(Backbone, ListModel){

  var ListCollection = Backbone.Collection.extend({
    model: ListModel
  });

  return ListCollection;
});
