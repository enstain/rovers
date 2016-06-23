var eventsListener = new function() {
  var _triggers = {};

  this.on = function(event,callback) {
      if(!_triggers[event])
          _triggers[event] = [];
      _triggers[event].push( callback );
    }

  this.triggerHandler = function(event,params) {
      if( _triggers[event] ) {
          for( i in _triggers[event] )
              _triggers[event][i](params);
      }
  }
};