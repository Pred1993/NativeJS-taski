// console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI

// class Test {
//     constructor(public name: string) {
//     }
//     getName() {
//
//     }
// }
//
// class SuperTest extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//     getName() {
//
//     }
// }
// let obj = new SuperTest("Anton")
//
// //@ts-ignore
// obj.__proto__.getName = 50
// //@ts-ignore
// obj.__proto__.__proto__.getName = 50
// console.dir(obj)
// console.dir(SuperTest)
// console.dir(Test)


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


// class Animal {
//     constructor(public name: string) {
//     }
//     walk() {
//         return `${this.name} + walking`
//     }
//     eat() {
//         `${this.name} walking`
//     }
//     sleep() {
//         `${this.name} walking`
//     }
// }
// const obj = new Animal('Animal')
// //@ts-ignore
// obj.__proto__.fullHouse = function () {}
// console.dir(obj)
// console.dir(Animal)


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


//Task 06
// Задача на дескрипторы. Как нужно переписать объект, чтобы код заработал

// let obj = {a: 1}
// if(obj.a === 1 && obj.a === 2 && obj.a === 3) {
//     console.log('Bingo')
// }

// just a plug
export default () => {};