(function () {

    var names = ["John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim",'Rita','Joe','Pelumi','Ore','Tolu','Ope','Janet'];

    for (var i = 0; i < names.length; i++) {

        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter == 'j') {
            byeSpeaker.speak(names[i]);
          } else {
            helloSpeaker.speak(names[i]);
          }
        }
        
        })();

       