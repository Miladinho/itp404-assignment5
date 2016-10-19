import Ember from 'ember';

export default Ember.Route.extend({
  model: function(model) {
    var url = "http://itp-api.herokuapp.com/api/artists/"+model.id+"/songs";
    console.log(url);
    //var promise = $.getJSON(url);
    return $.ajax({
      url: url
    }).then( function(json) {
      console.log(json);
      return json;
    })
  }
});
