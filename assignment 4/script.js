
(function(){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (x=0; x<names.length; x++) {
  var firstLetter = names[x].charAt().toLowerCase();
    if (firstLetter == "j") {
     byeSpeaker.speak(names[x])
    } else {
     helloSpeaker.speak(names[x])
    }
  } 
})();


