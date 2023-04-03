// function Test(name, age) {
//     this.name = name
//     this.age = age
// }
//
// Test.prototype.getName = function () {}
// console.dir(Test)
//
// function SuperTest(name, age, city) {
//     Test.call(this, name, age)
//     this.city = city
// }
//
//
//
// SuperTest.prototype = Object.create(Test.prototype, {
//     constructor: {
//         value: SuperTest,
//     },
//     getName: {
//         value: function () {
//         }
//     }
// })
//
// console.dir(SuperTest)
// let obj = new SuperTest('Alex', 20, 'Minsk')
// console.dir(obj)
// let obj2 = new obj.constructor('Yo', 32, 'Kiev')

// Task 05
// Используя метод Apply реализовать свой собственный метод bind
Function.prototype.customBind = function (zczxczxc, ...args) {
    debugger
    const _self = this
    return function (...args2) {
        return _self.call(zczxczxc, ...args, ...args2)
    }
}

let obj = {name: 'Hanna'}
let obj2 = {
    name: 'Yo',
    sayName: function (x) {
        console.log(this.name + "" + x)
    }
}
console.dir(obj2)
console.log(obj2.sayName.customBind(obj)(1))
