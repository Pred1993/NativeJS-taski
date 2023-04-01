// Задача на нативную мемоизацию

const memoFunction = (fn) => {
    const cache = {}
    return (property) => {
        if(cache[property]) {
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