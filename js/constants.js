const NORTH   = 'N';
const EAST    = 'E';
const SOUTH   = 'S';
const WEST    = 'W';

const CLOCK_ORIENTS = [NORTH, EAST, SOUTH, WEST];

var MOVING_MAP = {};
MOVING_MAP[NORTH]   = [ 0, 1];
MOVING_MAP[EAST]    = [ 1, 0];
MOVING_MAP[SOUTH]   = [ 0,-1];
MOVING_MAP[WEST]    = [-1, 0];