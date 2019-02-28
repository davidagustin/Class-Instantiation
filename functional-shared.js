let House = function () {
  let obj = {};

  obj.color = color;

  obj.door = 'open';

  obj.open = houseMethods.open;
  obj.close = houseMethods.close;

  return obj
};


let houseMethods = {};

houseMethods.openDoor = function () {
  this.door = 'open';
};

houseMethods.closeDoor = function () {
  this.door = 'closed';
};

let house = House('red');

