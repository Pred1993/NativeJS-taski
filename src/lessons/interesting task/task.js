// Задача на нативную мемоизацию

const memoFunction = (fn) => {
    const cache = {}
    return (property) => {
        if (cache[property]) {
            return cache[property]
        } else {
            const result = fn(property)
            cache[property] = result
            return result
        }
    }

}

const fn = (str = '') => str.toLowerCase()
const memo = memoFunction(fn)
console.log(memo('Artem'))
console.log(memo('Artem'))
console.log(memo('Dima'))


//custom bind
const obj = {
    age: 25,
    getAge: () => {
        console.log(this.age, 'age')
    }
}

const obj1 = {
    age: 30,
    getAge: () => {
        console.log(this.age, 'age')
    }
}


Function.prototype.newBind = function (context, ...args) {
    const thisObj = this
    return (...args2) => {
        return thisObj.call(context, ...args, ...args2)
    }
}

