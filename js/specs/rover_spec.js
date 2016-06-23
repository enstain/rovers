describe("New rover", function() {

  var rover = new Rover(1,2,EAST);

  it("should has right x position", function() {
    assert.equal(rover.x, 1);
  });

  it("should has right y position", function() {
    assert.equal(rover.y, 2);
  });

  it("should has right orientation", function() {
    assert.equal(rover.orient, EAST);
  });

});

describe("Rover which oriented to North", function() {

  var rover = new Rover(0,0,NORTH);

  describe("after move", function() {

    before(function() {
      rover.move();
    });

    it("should has step forward for y", function() {
      assert.equal(rover.y, 1);
    });

    it("should has same position on x", function() {
      assert.equal(rover.x, 0);
    });

    it("should has same orientation", function() {
      assert.equal(rover.orient, NORTH);
    });

  });

  describe("after rotate left", function() {
    before(function() {
      rover.rotateLeft();
    });

    it("should has West orientation", function() {
      assert.equal(rover.orient, WEST);
    });
  });

  describe("after rotate right", function() {
    before(function() {
      rover.rotateRight();
    });

    it("should has origin orientation", function() {
      assert.equal(rover.orient, NORTH);
    });
  });

});

describe("Rover which oriented to East", function() {

  var rover = new Rover(0,0,EAST);

  describe("after move", function() {
    before(function() {
      rover.move();
    });

    it("should has step forward for x", function() {
      assert.equal(rover.x, 1);
    });

    it("should has same position on y", function() {
      assert.equal(rover.y, 0);
    });

    it("should has same orientation", function() {
      assert.equal(rover.orient, EAST);
    });
  });

  describe("after rotate left", function() {
    before(function() {
      rover.rotateLeft();
    });

    it("should has North orientation", function() {
      assert.equal(rover.orient, NORTH);
    });
  });

  describe("after rotate right", function() {
    before(function() {
      rover.rotateRight();
    });

    it("should has origin orientation", function() {
      assert.equal(rover.orient, EAST);
    });
  });

});

describe("Rover which oriented to South", function() {

  var rover = new Rover(1,1,SOUTH);

  describe("after move", function() {
    before(function() {
      rover.move();
    });

    it("should has step backward for y", function() {
      assert.equal(rover.y, 0);
    });

    it("should has same position on x", function() {
      assert.equal(rover.x, 1);
    });

    it("should has same orientation", function() {
      assert.equal(rover.orient, SOUTH);
    });
  });

  describe("after rotate left", function() {
    before(function() {
      rover.rotateLeft();
    });

    it("should has East orientation", function() {
      assert.equal(rover.orient, EAST);
    });
  });

  describe("after rotate right", function() {
    before(function() {
      rover.rotateRight();
    });

    it("should has origin orientation", function() {
      assert.equal(rover.orient, SOUTH);
    });
  });

});

describe("Rover which oriented to West", function() {

  var rover = new Rover(1,1,WEST);

  describe("after move", function() {
    before(function() {
      rover.move();
    });

    it("should has step backward for x", function() {
      assert.equal(rover.x, 0);
    });

    it("should has same position on y", function() {
      assert.equal(rover.y, 1);
    });

    it("should has same orientation", function() {
      assert.equal(rover.orient, WEST);
    });
  });

  describe("after rotate left", function() {
    before(function() {
      rover.rotateLeft();
    });

    it("should has South orientation", function() {
      assert.equal(rover.orient, SOUTH);
    });
  });

  describe("after rotate right", function() {
    before(function() {
      rover.rotateRight();
    });

    it("should has origin orientation", function() {
      assert.equal(rover.orient, WEST);
    });
  });

});

describe("Rover parsing function", function() {
  var rover = new Rover(0,0,NORTH);

  it("should parse M command", function() {
    assert.equal(rover.parseCommand('M'), 'moving');
  });

  it("should parse L command", function() {
    assert.equal(rover.parseCommand('L'), 'rotate left');
  });

  it("should parse R command", function() {
    assert.equal(rover.parseCommand('R'), 'rotate right');
  });

  it("shouldn't parse any another command", function() {
    expect(function(){
      rover.parseCommand('X')
    }).to.throw('unexpected input command: X');
  });
});

describe("Rover (1,2,N) after parsing the input of commands LMLMLMLMM", function() {
  var rover = new Rover(1,2,NORTH),
      input = 'LMLMLMLMM';

  before(function() {
    rover.parseChainOfCommands(input);
  });

  it("should has expected x position", function() {
    assert.equal(rover.x, 1);
  });

  it("should has expected y position", function() {
    assert.equal(rover.y, 3);
  });

  it("should has expected orientation", function() {
    assert.equal(rover.orient, NORTH);
  });

});

describe("Rover (3,3,E) after parsing the input of commands MMRMMRMRRM", function() {
  var rover = new Rover(3,3,EAST),
      input = 'MMRMMRMRRM';

  before(function() {
    rover.parseChainOfCommands(input);
  });

  it("should has expected x position", function() {
    assert.equal(rover.x, 5);
  });

  it("should has expected y position", function() {
    assert.equal(rover.y, 1);
  });

  it("should has expected orientation", function() {
    assert.equal(rover.orient, EAST);
  });

});