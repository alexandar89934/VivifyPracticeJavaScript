

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