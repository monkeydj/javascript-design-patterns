//------- Revealing Module Pattern ----------------

var myRevealingModule = (function () {
  var privateVar = "Frank";
  var publicVar = "Hey there!";
  
  function privateFunction() {
    console.log("Name: " + privateVar);    
  }
  
  function publicSetName(strName) {
    privateVar = strName;
  }
  
  function publicGetName() {
    privateFunction();
  }
  
  // Reveal public pointers to
  // private functions and properties  
  return {
    setName : publicSetName,
    greeting : publicVar,
    getName : publicGetName
  };
})();
                        
                        
myRevealingModule.setName("Frank Stöckli");                        
myRevealingModule.getName();   


//--------- More specific names when using the revealing module pattern --------
var myRevealingModule = (function() {
  var privateCounter = 0;
  
  function privateFunction() {
    privateCounter++;
  }
  
  function publicFunction() {
    publicIncrement();
  }
  
  function publicIncrement() {
    privateFunction();
  }
  
  function publicGetCount() {
    return privateCounter;
  }
  
  // Reveal public pointers to
  // private functions and properties
  
  return {
    start : publicFunction,
    increment : publicIncrement,
    count : publicGetCount
  };
})();
myRevealingModule.start();
myRevealingModule.increment();
console.log(myRevealingModule.count());

                        