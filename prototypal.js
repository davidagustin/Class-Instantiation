let house = function (color) {
  let obj = Object.create(House.prototype);

  obj.color = color;
  obj.door = 'open';


  return obj;
};

House.prototype.openDoor = function () {
  this.door = 'open';
};

House.prototype.closeDoor = function() {
  this.door = 'closed;'
};

let house = House('red');
