function Plateau(x,y) {
  this.x = (+x >= 0) ? +x : 0;
  this.y = (+y >= 0) ? +y : 0;
  this.rovers = [];
};

Plateau.create = function(args) {
  function plateau(args) {
    return Plateau.apply(this, args);
  }
  plateau.prototype = Plateau.prototype;

  return new plateau(args);
};

Plateau.prototype.checkBordersCollision = function(rover) {
  rover.x = (rover.x > this.x) ? this.x : rover.x;
  rover.y = (rover.y > this.y) ? this.y : rover.y;

  rover.x = (rover.x < 0) ? 0 : rover.x;
  rover.y = (rover.y < 0) ? 0 : rover.y;
}