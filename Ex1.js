function cheetah (type) {
  this.type = type;
}

cheetah.prototype.speak = function (line) {
  console.log (`the ${this.type} cheetah says ${line}`);
};

let weirdCheetah = new cheetah ('flash');

console.log (weirdCheetah);
console.log (cheetah.speak);

// class notation

class Lion {
  constructor (type, speak) {
    this.type = type;
    this.speak = speak;
  }

  speak (line) {
    console.log (`the ${this.type} lion says that ${line}`);
  }
}

let hungryLion = new Lion ('Hungry');
console.log (hungryLion);

Lion.prototype.teeth = 'large';
console.log (hungryLion.teeth);

// map function

let ages = {
  john: 23,
  sedorf: 21,
  dani: 21,
  bosco: 1,
  bella: 2,
};

console.log (`john is ${ages['john']}`);
