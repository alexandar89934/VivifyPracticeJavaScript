

function forLoop() {
    for (var i = 0; i < 10; i++) {
        let element = i;
        console.log(element);
    }
    console.log(outsideFunction);


    var insideFunction = 9;
    console.log(insideFunction);
}
 
    
forLoop();

    var outsideFunction = 5;
//U konsoli se prikaze samo poslednja iteracija varijable element

//desi se greska jer let varijabla ima function scope

//dobijemo undefined u consoli

//ispise se vrednost definisane varijable


const colorArray = ['red','green','blue'];

for (let i = 0; i < colorArray.length; i++) {
    const element = colorArray[i];
    console.log(element);
    
}

colorArray.forEach(element => {
    console.log(element);   
});



var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  function zooInventory(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
      output.push(array[i][0] + ' the ' + array[i][1][0] + ' is ' + array[i][1][1]);
    }
    return output;
  }
  
  console.log(zooInventory(myZoo));
  
      

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * x);

console.log(map1);
// expected output: Array [1,16,81,256]



(function() {
   
    function add(a, b) {
        return a + b;
    }

    console.log(add(10,20)); // 30
}());

function timesTwo(number) {
    return number * 2
  }
        
(number) => {number * 2};
    
var personObj = {
	firstName: "Aleksandar",
	lastName: "Radovanovic",
	age: 30,
}
console.log(personObj);

var personJson = '{"firstName":"Aleksandar", "lastName":"Radovanovic", "age":"30"}';

console.log(personJson);

var jsonParsedObj = JSON.parse(personJson);

console.log(jsonParsedObj);

var stringifyObj = JSON.stringify(personObj);

console.log(stringifyObj);


var numberArray = [4,3,2,5,3,4,2];

var jsonNumberArray = '{"1","6","4","2","7"}';

var convertedArray = JSON.stringify(jsonNumberArray);

for (let i = 0; i < convertedArray.length; i++) {
    const element = convertedArray[i];
    console.log(element);
    
}

//es5 function
function esFiveFunc (name) {
    return 'hello ' + name
   }

//es6 function
   const esSixFunc = name => `hello ${name}`;


//async/await vs. Promise.then

function isGreater (a, b, cb) {
  
    var greater = false
    if(a > b) {
      greater = true
    }
    cb(greater)
  }

  isGreater(1, 2, function (result) {
    if(result) {
      console.log('greater');
    } else {
      console.log('smaller')
    }
  })


  const isGreaterPromise = (a, b) => {
    return new Promise ((resolve, reject) => {
     if(a > b) {
      resolve(true)
     } else {
      reject(false)
     }
    })
   }
   isGreaterPromise(1, 2)
    .then(result => {
       console.log('greater')
    })
    .catch(result => {
       console.log('smaller')
    })




    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 1000);
      });
      
        myPromise
        .then(console.log("This is how handle Fulfilled A"), console.log("This is how handle Rejected A"))
        .then(console.log("This is how handle Fulfilled B"), console.log("This is how handle Rejected B"))
        .then(console.log("This is how handle Fulfilled C"), console.log("This is how handle Rejected C"));


    const myPromiseOne = new Promise(function(myResolve, myReject) {
            setTimeout(function() { myResolve("Success!"),
                                    myReject("Error!")
            }, 3000);
          });
          
        myPromiseOne.then(
            function(value) {console.log(value)},
            function(error) {console.log(error)}
            
            );

class Character {

    static counter = 0;

    constructor(x,y) {
        this.x = x;
        this.y = y;
        if (this.constructor == Character) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }

      play(){
        throw new Error("Method must be implemented");
      }
}

class playerCharacter extends Character {

    constructor(x,y){
        super();
        if(x>10 || y>10){ 
            throw new Error("Position is out of scope.");
          }
          else{
            this.x = x;
            this.y = y;
            Character.counter++;
          }
       
    }
        play(){
            console.log("play");
        };
}

class nonPlayerCharacter extends Character {

    constructor(x,y){
        super();
        if(x>10 || y>10){ 
            throw new Error("Position is out of scope.");
          }
          else{
            this.x = x;
            this.y = y;
            Character.counter++;
          }
       
    }
    play(){
        console.log("play");
    };

     
}

var player = new playerCharacter(3,4).play();

var nonPlayer = new nonPlayerCharacter(2,4).play();

console.log(Character.counter);


