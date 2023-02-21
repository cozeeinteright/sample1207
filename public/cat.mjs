export function Cat(name) {
  this.name = name;
  this.age;
  this.sayHi = function() {
    console.log(`Hello my name is ${this.name}`);
  }
}