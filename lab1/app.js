class RandomPicker {
  //list of all items to be selected from randomly
  items;

  constructor(items) {
    //store the user set of items
    this.items = items;
  }

  //returns a random entry in the array
  pickRandom() {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}

let fortunes = [
  "Never give up. You're not a failure if you don't give up.",
  "Meeting adversity well is the source of your strength.",
  "Serious trouble will bypass you.",
  "You already know the answer to the questions lingering inside your head.",
  "You are very talented in many ways.",
  "A stranger, is a friend you have not spoken to yet.",
  "You will be called in to fulfill a position of high honor and responsibility.",
];

class FortuneCookie extends RandomPicker {
  outputElement;

  constructor(element) {
    super(fortunes);
    this.outputElement = element;
  }

  open() {
    let fortune = this.pickRandom();
    this.outputElement.innerHTML = fortune;
  }
}

let myFortuneCookie = new FortuneCookie(document.getElementById("newFortune"));
