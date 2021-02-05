/**
 * TODO: Create a keydown listener to track what keys are hit
 * TODO: Create a Beat class to represent the beat object in utils.js
 * TODO: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * TODO: Button pt1: Initialize color and element values
 * TODO: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * TODO: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * TODO: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        color: new Button("#0fe" , 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        color: new Button("#0fe" , 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        color: new Button("#0fe" , 68)
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        color: new Button("#F0F" , 70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        color: new Button("#F0F" , 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        color: new Button("#F0F" , 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        color: new Button("#F0F" , 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        color: new Button("#FFF" , 75)
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        color: new Button("#FFF" , 76)
    }
}

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
    
    if(event.keyCode in beats){
        let keyPress = beats[event.keyCode];
        // console.log(keyPress)
        keyPress.beat.play();
        keyPress.color.select();
    }
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */

 addEventListener('keydown', (event) =>{
     triggerBeat(event)
 })

  function handleClick(event){
    if(event in beats){
        let keyPress = beats[event];
        // console.log(keyPress)
        keyPress.beat.play();
        keyPress.color.select();
    }
  }
 