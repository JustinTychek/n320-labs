//current instrument counter
let currentInstrument = 0;

//creating the instrucment class
class Instrument {
  constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }

  //method that plays a note when called
  // play(duration) {
  //   console.log(this.family + " " + this.verb + " at " + this.loudness);

  //   //create a synth and connect it to the main output (your speakers)
  //   const synth = new Tone.Synth().toDestination();

  //   //play a single note for the duration of an 8th note
  //   synth.triggerAttackRelease("C6", duration);

  //   //call the callback method "over" when the sound is complete
  //   // setTimeout(this.activatedCallback().bind(this), duration);
  // }

  playNext(duration) {
    console.log(this.family + " " + this.verb + " at " + this.loudness);

    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a single note for the duration of an 8th note
    synth.triggerAttackRelease("C6", duration);

    //call the callback method "over" when the sound is complete
    // setTimeout(this.activatedCallback().bind(this), duration);

    currentInstrument++;
  }
}

//woodwind class that extends the instrument class
class Woodwind extends Instrument {
  constructor(family, verb) {
    //set the loudness
    super(100);
    this.family = family;
    this.verb = verb;
  }
}

//percussion class that extends the instrument class
class Percussion extends Instrument {
  constructor(family, verb) {
    //set the loudness
    super(80);
    this.family = family;
    this.verb = verb;
  }
}

//string class that extends the instrument class
class String extends Instrument {
  constructor(family, verb) {
    //set the loudness
    super(90);
    this.family = family;
    this.verb = verb;
  }
}

//create new instances of each of the classes and give them a family and verb
let myWoodwind = new Woodwind("Clarinet", "strikes");
let myPercussion = new Percussion("Snare", "taps");
let myString = new String("Violin", "plucks");

//put all the instances into an array to be looped through
let myInstruments = [myWoodwind, myPercussion, myString];

//loop through each of the objects and play a sound
for (let i = 0; i < myInstruments.length; i++) {
  console.log(myInstruments[i]);
  // myInstruments[i].play(0.5);
}
