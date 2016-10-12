import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    artist: function(e) {
        var artistID = this.get("id");
        //alert(this.get("searchTerm"));
        this.transitionToRoute('artists.artist',artistID;
      }
  }
});
