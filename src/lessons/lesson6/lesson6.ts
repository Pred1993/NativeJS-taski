console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Test {
//     name: string
//     age: number
//     city: string = 'Minsk'
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     sayHi() {
//
//     }
//     bindFunc = () => {
//
//     }
// }
// let obj = new Test('Evgen', 33)
// obj.city = 'Kiev'
// console.dir(obj)
// console.dir(Test)

// class Test {
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     sayHi() {
//         console.log('Hello from parent')
//     }
//     arrow = () => { // если в дочке создать такую же стрелочную функцию, то она перезапишет родительскую навсегда, так как стрелка помещается в свойства, а не в прототипы
//
//     }
// }
//
// class Test2 extends Test {
//     age: number
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age
//     }
//     sayBye() {
//
//     }
//     // sayHi() { можно так делать, в таком случае переопределит родительский метод
//     //
//     // }
//    sayHi(){
//         super.sayHi() // позволяет вызвать родительский метод и свой
//        console.log('Hello from child')
//    }
// }
//
// let obj = new Test2('Evgen', 33)
// let obj2 = new Test('Artem')
// console.dir(obj)
// console.log(obj.sayHi())
// console.log(obj.arrow())
// ---------------------Модификаторы-----------------------
//public - сделал всё типизацию за нас, пример без него выше
// class Test {
//     constructor(public name: string, public age: number) {
//     }
// }
//
// let obj = new Test('Evgen', 33)
// console.log(obj)

//privat
// class Test {
//     constructor(private name: string, public age: number) {
//     }
//     sayName() {
//         console.log(this.name)
//     }
//     private sayYo () {
//         console.log('Yo-yo-yo')
//     }
//     protected sayBla () {
//         console.log('Bla-bla-bla')
//     }
// }
// class Test2 extends Test {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
//     someMethod() {
//         this.sayBla()
//     }
// }
//
// let obj = new Test('Eugen', 25)
//     //obj.name // Property 'name' is private and only accessible within class 'Test'.
//
// console.log(obj.sayName()) // через метод обратиться можно
// // Приватные свойства не наследуются, если мы хотим отнаследоваться(extends), то вместо privat используем protected
//     //obj.sayBla//Property 'sayBla' is protected and only accessible within class 'Test' and its subclasses(в рамках класса protected тоже приватным считается
// let obj2 = new Test2('Eugen', 25)
// obj2.someMethod()// вызовет наследуемый sayBla(), так ака он protected, при том что в наследуемом классе мы не сможем обратиться к приватным методам и свойствам из класса Test
// -------------------------------Static---------------------------------
// class Test {
//     static param: string = 'Yo'// не будет являться частью экземпляра класса
//     someM() {
//         this// напомню, что this в обычном методе указывает на контекст будущего созданного от этого класса инстанса
//     }
//     static testMethod() {
//         console.log(this.param) // this в статическом методе указывает на сам класс Test
//     }
// }
// let obj = new Test()
// console.log(obj)

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string
    surname: string
    groupNumber: number
    progress: number[]
    averageMark: number
}

class Student implements IStudent {
    averageMark: number

    constructor(public name: string, public surname: string, public groupNumber: number, public progress: number[]) {
        this.name = name
        this.surname = surname
        this.groupNumber = groupNumber
        this.progress = progress
        this.averageMark = this.progress.reduce((acc, el) => acc + el) / this.progress.length
    }

    private static sortStudent(s1: IStudent, s2: IStudent) {
        if (s1.averageMark > s2.averageMark) {
            return 1
        } else if (s1.averageMark < s2.averageMark) {
            return -1
        } else {
            return 0
        }
    }
    static sort(arr: Array<IStudent>){
        const temp = [...arr]
        return temp.sort(this.sortStudent)
    }
    private static isAllMarksEqual(marks: number[], mark: number){
        return marks.every(mk => mk === mark)
    }
    private static filterStudent(arr: Array<IStudent>) {
        const result: Array<IStudent> = []
        arr.forEach(s => {
            if(this.isAllMarksEqual(s.progress, 4) || this.isAllMarksEqual(s.progress, 5)) {
                result.push(s)
            }

        })
        return result
    }
    static printGoodStudents(arr: Array<IStudent>){
        this.filterStudent(arr).forEach(s => {
            console.log(`Student - ${s.surname}, Group - ${s.groupNumber}`)
        })
    }
}


let s1 = new Student('Artem', 'Ivchenko', 1, [4, 5, 3, 4, 5])
let s2 = new Student('Oleg', 'Levkovich', 2, [4, 4, 4, 4, 4])
let s3 = new Student('Denis', 'Ivanov', 3, [5, 5, 5, 5, 5])
let s4 = new Student('Vlad', 'Rudak', 4, [4, 5, 3, 4, 5])
let s5 = new Student('Dima', 'Shunto', 5, [4, 5, 3, 4, 5])

let student = [s1, s2, s3, s4, s5]

console.log(Student.sort(student))
console.log(Student.printGoodStudents(student))
// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? нельзя!
// Можно ли создать метод класса который будет удалять экземпляр класса? нельзя!

class Task2 {
    param1: any
    param2: any
    constructor(param1: any = 10, param2: any = null) {
        this.param1 = param1
        this.param2 = param2
    }
}
let temp = new Task2()

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};