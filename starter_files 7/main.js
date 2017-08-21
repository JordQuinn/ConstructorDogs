//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype

function Dog(status,color,hungry,owner){
  this.status = "normal";
  this.color = "black";
  this.hungry = true;
  this.owner = undefined;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

function Human () {
  this.pet  = function(dog) {
    dog.status = "happy";
  }
  this.feed = function(dog){
    dog.hungry = false;
  }
  this.cool = true;
}

let mason = new Human
mason.cool = false;
let julia = new Human
let sadie = new Dog
sadie.hungry = false;

let moonshine = new Dog
let atticus = new Dog


// Instances of Human
// Needed: mason, julia
