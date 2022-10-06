

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

