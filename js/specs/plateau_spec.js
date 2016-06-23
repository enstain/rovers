describe("Plateau", function() {

  describe("with normal input size", function() {  
    var plateau = new Plateau(5,5);
    
    it("should has right x size", function() {
      assert.equal(plateau.x, 5);
    });
    it("should has right y size", function() {
      assert.equal(plateau.y, 5);
    });

    it("should check collisions for forward moving rover", function() {
      var rover = new Rover(0,0,NORTH);
      eventsListener.on('checkBordersCollision', function(rover) {
        plateau.checkBordersCollision(rover);
      });
      for (var i=0;i<10;i++) {
        rover.move();
      }
      assert.equal(rover.y, 5);
    });

    it("should check collisions for backward moving rover", function() {
      var rover = new Rover(3,3,SOUTH);
      eventsListener.on('checkBordersCollision', function(rover) {
        plateau.checkBordersCollision(rover);
      });
      for (var i=0;i<10;i++) {
        rover.move();
      }
      assert.equal(rover.y, 0);
    });
  });

  describe("with unpermit input size", function() {  
    var plateau = new Plateau(-5,-5);
    it("should has zero x size", function() {
      assert.equal(plateau.x, 0);
    });
    it("should has zero y size", function() {
      assert.equal(plateau.y, 0);
    });
  });

});