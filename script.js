function x(a){
        let c=100;
       function mid(){
        var b=10;
        function inner() {
             console.log(b, c, a);
        }
           inner();
       }
       return mid;
}
var cl=x('suraj');
  cl();


function x(){
       for(var i=1; i<=5; i++){
             function y(j){
                 setTimeout(function (){console.log(j)}, 2000);
             }
             y(i);
       }
}
x();



function counter(){
       let cnt=0;
       return function (){
             cnt++;
             console.log(cnt);
       }
}

 var c=counter();
 c();
 c();
 var c1=counter();
 c1();
 c1();


var x = 20;
function outer() {

    var x = 10;
    
    function inner() {
    
    var y = 5;
    
    console.log(x + y);
    
    }
    
    
    
    return inner;
    
    }
  
    
    var innerFunc = outer();
    innerFunc();
    



var a=100;
{
   var a=200;
   {
      var a=10;
      console.log(a);
   }
   console.log(a);
}
console.log(a);


// good example...
function outer() {

    var x = 10;
    
    function inner() {
    
    var y = 5;
    
    console.log(x + y);
    
    x = 20;
    
    }
    
    return inner;
    
    }
    
    var innerFunc = outer();
    
    innerFunc();
    innerFunc();


// good one

function outest(){
    var c = 12; 
    function outer(b){ 
      function inner(){
        console.log(a, b, c);  
      }
      let a =10;  
      return inner;
    }
    return outer;
  }
  
  let a =100;
   
  var close = outest()("Hi Closures");  
  close(); 
    