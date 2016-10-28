//--------- Object with literal notation ----------
var myObjectWithLiteralNotation = {
  myKey 			: 'myValue',  
  myFunction 	: function() {
  	console.log('my function has been called');  
  }
};

myObjectWithLiteralNotation.anotherKey = 'anotherValue';
console.log(myObjectWithLiteralNotation.myKey);
console.log(myObjectWithLiteralNotation.anotherKey);
myObjectWithLiteralNotation.myFunction();


//--------- Object with literal notation ----------
var myModule = {
  // Property
  myProperty : "someValue",
  
  // another object
  myConfig : {
    useCaching : true,
    language : "en"
  },
  
  // basic method
  saySomething : function() {
    console.log("What do I say?");
  },
  
  reportMyConfig : function() {
    console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
  },
  
  updateMyConfig : function(newConfig) {
    this.myConfig = newConfig;
    console.log(this.myConfig.language);
  	}
};

myModule.saySomething();
myModule.reportMyConfig();
myModule.updateMyConfig({
  language : "fr",
  useCaching : false
});
myModule.reportMyConfig();


//---------------- First example ------------------
var testModule = (function() {
  var counter = 0;
  
  return {
    incrementCounter : function() {
      return counter++;
    },
    
    resetCounter : function() {
    	console.log("counter value prior to reset: " + counter);
    	counter = 0;
  	}	
  };    
})();

testModule.incrementCounter();
testModule.resetCounter();