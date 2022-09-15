console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greeting?: Function
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32,
}

function greeting() {
    //@ts-ignore
    return `My name is ${this.name}. I am ${this.age}`
}

someObj.greeting = greeting
console.log(someObj.greeting())


// function greeting() {
//     //@ts-ignore
//     return `My name is ${this.name}. I am ${this.age}`
// }
// someObj.greeting = function() {
//     greeting()
// }
// в данном случае когда функция вызывается в функции контекст this не передается а берется оттуда где определена функция greeting (что-то вроде стрелочной функции в данном случае срабатывает)
// console.log(someObj.greeting())

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
type CounterType = {
    count: number
    getCurrentCount: () => number
    increment: () => CounterType
    decrement: () => CounterType
    setCurrentCount: (count: number) => CounterType
    restCurrentCount: () => void
}
let counter: CounterType = {
    count: 1,
    getCurrentCount: function () {
        return this.count
    },
    increment: function () {
        this.count = this.count + 1
        return this
    },
    decrement: function () {
        this.count = this.count - 1
        return this
    },
    setCurrentCount: function (count: number) {
        this.count = count
        return this
    },
    restCurrentCount: function () {
        this.count = 0
    }
}

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

// Task 04
// Написать функцию конструктор MyFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
function MyFirstConstructorFunc(name: string, age: number) {// функция конструктор неявно возвращает нам объект, если мы поставим ретурн явно и вернем примитив, то функция конструктор также вернет нам объект как и без явного ретурн, но если мы запишем в явный ретурн объект любой, то функция конструктр уже нам вернет явный объект
    //@ts-ignore
    this.name = name
    //@ts-ignore
    this.age = age
    //@ts-ignore
    this.greeting = greeting
}

//@ts-ignore
console.log(new MyFirstConstructorFunc('Eugene', 32))
// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One
type OneType = {
    name: string
}
let One: OneType = {name: 'One'};
let Two = {
    name: 'Two',
    sayHello: function (age: number) {
        console.log(`Hello, my name is ${this.name}`)
        console.log(age)
    }
};
Two.sayHello.bind(One)(35)
//@ts-ignore
// One.sayHello = function (age: number) {
//     console.log(`Hello, my name is ${this.name}`)
// }
// //@ts-ignore
// One.sayHello.bind(Two)(34)

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore
type HelperObjType = {
    name: string
    age: number
    changeName: (name: string) => void
    setAge: (age: number) => void
    greeting: (age: number) => void
}
let helperObj: HelperObjType = {
    name: 'Alex',
    age: 35,
    changeName(name: string) {
        this.name = name
    },
    setAge(age) {
        this.age = age
    },
    greeting: Two.sayHello
}
console.log(helperObj.greeting.bind(helperObj)(35))
// Bind

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
function result(one: OneType, helperObj: HelperObjType) {
    return function (string: string) {
        //@ts-ignore
        helperObj.changeName.bind(one,string)()
    }
}
result(One, helperObj)('adawd')
console.log(One)



// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30


// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call

// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};

// just a plug
export default () => {
};