var Character = function (x,y){
  Character.count = 0;
  if(x>10 || y>10){ 
    throw new Error("Position is out of scope.");
  }
  this.x =x;
  this.y = y;
};
Character.prototype.play = function (){
  console.log("play");
}

var PlayerCharacter = function(x,y){
  Character.call(this, x, y);
  Character.count++;
  console.log(Character.count);
}
PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.prototype.constructor = PlayerCharacter(1,5);
PlayerCharacter.prototype.play();

var NonPlayerCharacter = function(x,y){
  Character.call(this, x, y);
  Character.count++;
  console.log(Character.count);
}
NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype.constructor = NonPlayerCharacter(2,5);
NonPlayerCharacter.prototype.play();






