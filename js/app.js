function run() {
  var input = sanitizeInput(document.getElementById("input").value.split('\n')),
      output = '';

  preparePlateau(input);
  output = processRovers(input);

  document.getElementById("output").value = output;
}

var sanitizeInput = function(input) {
  var sanitizedInput = input.map(function(string) {
    return string.trim();
  }).filter(function(string) { return string.length });
  return sanitizedInput;
}

var preparePlateau = function(input) {
  var plateauSize = input.splice(0,1)[0].split(' '),
      plateau = Plateau.create(plateauSize);

  eventsListener.on('checkBordersCollision', function(rover) {
    plateau.checkBordersCollision(rover);
  });
}

var processRovers = function(input) {
  var output = '';

  while (input.length) {
    var roverParams = input.splice(0,2),
        roverPosition = roverParams[0].split(' '),
        roverCommands = roverParams[1],
        rover = Rover.create(roverPosition);

    rover.parseChainOfCommands(roverCommands);
    output += rover.toString()+'\n';
  }

  return output;
}