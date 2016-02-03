var fizzbuzz=function(number) {
    

for (var x=1; x <=number; x++){
    if( (x % 3 ) === 0 && (x % 5) === 0 ) {
        console.log("fizzbuzz");
    } else 
        if( (x % 3) === 0 ) {
            console.log("Fizz");
    } else 
        if( (x % 5) === 0 ) {
            console.log("Buzz");
    } else {
        console.log(x);
    }
   }
};


fizzbuzz(16);
