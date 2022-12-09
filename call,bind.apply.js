// function khan() {
//   return `${this.name},${this.age},${this.address}`;
// }
// console.log(khan.call(obj));

// function intro() {
//   console.log(
//     `hello my name is ${this.myname} and my age ${this.age} my address ${this.address}`
//   );
// }

// let obj1 = {
//   myname: "sameer",
//   age: "20",
//   address: "jhotwara",
// };
// intro.call(obj1);
// intro.apply(obj1);
// let bnd = intro.bind(obj1);
// bnd();

// let obj = {
//   name: "farman khan",
//   age: 17,
//   address: "jhotwara",
// };

// function khan(a, b) {
//   console.log(
//     `my name is ${this.name} and my age is ${this.age} and my address is ${this.address}`
//   );
//   console.log(a + b);
// }

// khan.call(obj, 1, 3);
// khan.apply(obj, [1, 3]);
// let bnd = khan.bind(obj, 1, 3);
// bnd();

// let obj = {
//   name: "farman",
//   sirName: "khan",
// };

// function khan() {
//   console.log(this.name, this.sirName);
// }

// khan.call(obj);

// let obj = {
//   name: "farman",
//   sirName: "khan",
// };

// function khan(a, b) {
//   console.log(this.name, this.sirName);
//   console.log(a + b);
// }

// khan.apply(obj, [10, 20]);

// let obj = {
//   name: "farman",
//   sirName: "khan",
// };

// function khan(a, b) {
//   console.log(this.name, this.sirName);
//   console.log(a + b);
// }

// let bind = khan.bind(obj, 10, 20);
// bind();
