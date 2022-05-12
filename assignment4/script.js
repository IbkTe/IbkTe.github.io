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

        // for (var i=0; i<names.length; i++){


        //     if (names[i][0] == 'J'){
        //         console.log('Goodbye ' + names[i]);
        //     }
        //     else{
        //         console.log(`Hello ${names[i]}`)
            
        //     }
        // };
        