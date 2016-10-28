//-----A very simple new mail handler----

var mailCounter = 0;
subscribe = new function(text, function(topic, data) {});

var subscriber1 = subscribe("inbox/newMessage", function(topic, data) {
  console.log("A new message was received: ", topic);
  console.log("Display the new message on the GUI");
});

var subscriber2 = subscribe("inbox/newMessage", function(topic, data) {
  mailCounter++;
  console.log("You have " + mailCounter + " new messages");
});

publish("inbox/newMessage", [{
  sender: "hello@finnova.com",
  body: "well, hello there"
}]);

