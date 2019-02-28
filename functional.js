let House = function(color) {
  let obj = {};

  obj.color = color;
  obj.door = 'open';

  obj.openDoor = function () {
    obj.door = 'open';
  };

  obj.closeDoor = function() {
    obj.door = 'closed';
  };

  return obj
};

let house = House('red');

