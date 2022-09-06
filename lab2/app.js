//creating the instrucment class
class Instrument {
  constructor(loudness, family, verb, callback) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
    this.activatedCallback = callback;
  }

  // method that plays a note when called
  play(duration) {
    console.log(this.family + " " + this.verb + " at " + this.loudness);

    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a single note for the duration of an 8th note
    synth.triggerAttackRelease("C6", duration);

    //call the callback method "over" when the sound is complete
    setTimeout(this.activatedCallback, duration);
  }
}

//woodwind class that extends the instrument class
class Woodwind extends Instrument {
  constructor(family, verb, callback) {
    //set the loudness
    super(100, callback);
    this.family = family;
    this.verb = verb;
  }
}

//percussion class that extends the instrument class
class Percussion extends Instrument {
  constructor(family, verb, callback) {
    //set the loudness
    super(80, callback);
    this.family = family;
    this.verb = verb;
  }
}

//string class that extends the instrument class
class String extends Instrument {
  constructor(family, verb, callback) {
    //set the loudness
    super(90, callback);
    this.family = family;
    this.verb = verb;
  }
}

//create new instances of each of the classes and give them a family and verb
let myWoodwind = new Woodwind("Clarinet", "strikes", playNext);
let myPercussion = new Percussion("Snare", "taps", playNext);
let myString = new String("Violin", "plucks", playNext);

//put all the instances into an array to be looped through
let myInstruments = [myWoodwind, myPercussion, myString];

//set the current instrument
let curIns = 0;

//plays the next note in the sequence
function playNext() {
  myInstruments[curIns].play(0.5);
  // console.log("playnext function");
  curIns++;
}

//loop through each of the objects and play a sound
function clickStart() {
  for (let i = 0; i < myInstruments.length; i++) {
    playNext();
  }
}
