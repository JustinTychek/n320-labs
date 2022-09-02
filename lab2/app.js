//creating the instrucment class
class Instrument {
  constructor(loudness, family, verb) {
    this.loudness = loudness;
    this.family = family;
    this.verb = verb;
  }

  //method that plays a note when called
  play(duration) {
    console.log(this.family + " " + this.verb + " at " + this.loudness);

    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    //play a single note for the duration of an 8th note
    synth.triggerAttackRelease("B6", duration);

    //call the callback method "over" when the sound is complete
  }
}
