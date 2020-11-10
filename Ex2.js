// using getters and setters to read temperature either in degree celcius or fahrenheit

class Temperature {
  constructor (celcius) {
    this.celcius = celcius;
  }

  get fahrenheit () {
    return this.celcius * 1.5 + 25;
  }

  set fahrenheit (value) {
    this.celcius = (value - 23) / 1.5;
  }

  static fromFahrenheit (value) {
    return new Temperature (value - 23) / 1.5;
  }
}
let temp = new Temperature (60);
temp.fahrenheit = 76;
console.log (`temperature in Fahrenheit is ${temp.fahrenheit}`);
console.log (`temperature in celcius is ${temp.celcius}`);
