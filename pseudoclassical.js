let House = function(color) {
  this.color;
  this.door = 'open';

};

House.prototype.openDoor = function() {
  this.door = 'open';
};

House.prototype.closeDoor = function() {
  this.door = 'closed;'
};

let house = new House('red');
