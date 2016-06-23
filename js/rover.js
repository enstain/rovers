var correctIndexOrientation = function(index) {
  if (index < 0) {
    index += CLOCK_ORIENTS.length;
  } else {
    if (index > CLOCK_ORIENTS.length-1) {
      index -= CLOCK_ORIENTS.length;
    }
  }
  return index;
};

function Rover(x,y,orient) {
  this.x = +x || 0;
  this.y = +y || 0;
  this.orient = orient || NORTH;
};

Rover.create = function(args) {
  function rover(args) {
    return Rover.apply(this, args);
  }
  rover.prototype = Rover.prototype;

  return new rover(args);
};

Rover.prototype.move = function() {
  var delta = MOVING_MAP[this.orient],
      delta_x = delta[0],
      delta_y = delta[1];

  this.x += delta_x;
  this.y += delta_y;
  eventsListener.triggerHandler('checkBordersCollision', this);
};

Rover.prototype.rotateLeft = function() {
  var currentIndexRotation = CLOCK_ORIENTS.indexOf(this.orient),
      nextIndexRotation = correctIndexOrientation(--currentIndexRotation);
  
  this.orient = CLOCK_ORIENTS[nextIndexRotation];
};

Rover.prototype.rotateRight = function() {
  var currentIndexRotation = CLOCK_ORIENTS.indexOf(this.orient),
      nextIndexRotation = correctIndexOrientation(++currentIndexRotation);
  
  this.orient = CLOCK_ORIENTS[nextIndexRotation];
};

Rover.prototype.parseChainOfCommands = function(inputString) {
  if (!inputString) {
    return;
  }
  
  var commandsArray = inputString.split(''),
      self = this;

  commandsArray.forEach(function(command) {
    try {
      self.parseCommand(command);
    } catch (error) {
      console.error(error);
    }
  });
}

Rover.prototype.parseCommand = function(inputChar) {
  switch(inputChar) {
    case 'M':
      this.move();
      return 'moving';
    case 'L':
      this.rotateLeft();
      return 'rotate left';
    case 'R':
      this.rotateRight();
      return 'rotate right';
    default:
      throw new Error('unexpected input command: '+inputChar);
      return;
  }
};

Rover.prototype.toString = function() {
  return [this.x, this.y, this.orient].join(' ');
}