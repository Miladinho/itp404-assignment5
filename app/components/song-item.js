import Ember from 'ember';

export default Ember.Component.extend({

  isPopular: Ember.computed('song.playCount', function() {
    //console.log(this.get('song.playCOunt'));
    return this.get('song.playCount') === '1';
  })
});
