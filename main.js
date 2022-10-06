

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
  
      
        
    

