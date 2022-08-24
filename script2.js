// apdaite, criate = map
//delete = filter

const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// arr name []
const getNames = (arr) => {
    const newArr = []
//взять кажд ел исход массива

    for (let i = 0; i < arr.length; i++) {
        const newValue = arr[i].name
        newArr[i] = newValue
    }
    return newArr
}
console.log(getNames(students))

// getGr => ['Hi, i'm Bob', .....]
const getGtr = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const newValue =`Hi, i'm  ${arr[i].name}`
        newArr[i] = newValue
    }
    return newArr
}
console.log(getGtr(students))

const selfMadeMap = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        newArr[i] = newValue
    }
    return newArr
}
console.log(selfMadeMap(students, st => st.name));
console.log(selfMadeMap(students, st => `Hi, i'm ${st.name}`));
//  ||
console.log(students.map(st => st.name))
console.log(students.map(st => `Hi, i'm ${st.name}`))

const selfMadeFilter = (arr, func) => {
    const newArr = []
    //взять кажд ел исход массива
    // проверить на соответств условия
    // если ок, то помещ елем в новый массив
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])//true || false
        // if(newValue) newArr.push(arr[i])
        newValue && newArr.push(arr[i])
    }
    return newArr
}
console.log(selfMadeFilter(students, st => st.scores >= 100))
//  ||
console.log(students.filter(st => st.scores >= 100))

//  find()
const selfMadeFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i]
    }
}
console.log(selfMadeFind(students, st => st.name))