
const todoListID_1 = '12je-98ds' //v1()
const todoListID_2 = '07rt-98js' //v1()
const  todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    /*    tasks: [
            {id: 1, title: 'HTML', isDone: true},
            {id: 2, title: 'CSS', isDone: true},
            {id: 3, title: 'JS', isDone: true},
        ]*/
    },
    {
        id: todoListID_2,
        title: 'What to bay',
        filter: 'all',
       /* tasks: [
            {id: 1, title: 'Milk', isDone: true},
            {id: 2, title: 'Beer', isDone: true},
            {id: 3, title: 'Meat', isDone: true},
        ]*/
    }
]
const tasks = {
    [todoListID_1]: [   //'12je-98ds'=> [todoListID_1], создает ключь, кот храниться в переменной
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: true},
    ],
    [todoListID_2]: [
        {id: 1, title: 'Milk', isDone: true},
        {id: 2, title: 'Beer', isDone: true},
        {id: 3, title: 'Meat', isDone: true},
    ],
    'user name': [],
    [10 + 20]: true //'30': true
}
console.log(tasks['user name'])//[]
console.log(tasks['30'])//true
console.log(tasks[todoListID_1].find(task => task.id === 2))//{id: 2, title: 'CSS', isDone: true}
console.log(tasks[todoListID_2].map(task => ({...task, isDone: false})))//true перезатирается на false
console.log(tasks[todoListID_2][0].title)//'Milk'

//reduce-сокращать, уменьшать
const nums = [1, 2, 3, 4, 5, 6]//sum
console.log(nums.reduce((acc, el) => {
    return acc = acc + el
}, 0))//21
//acc = 0, el = 1 => 1
//acc = 1, el = 2 => 3
//acc = 3, el = 3 => 6
//acc = 6, el = 4 => 10
//acc = 10, el = 5 => 15
//acc = 15, el = 6 => 21
// => 21
console.log(nums.reduce((acc,el)=> acc > el ? acc : el))// самое большое число 6
let students = [
    {name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {name: "John",
        age: 44,
        isMarried: false,
         scores: 100
}];
students.reduce((acc, el) => acc.scores > el.scores ? acc : el)//scores: 100

const sts = {
    'Bob': {age: 22,
        isMarried: true,
        scores: 85
    },
    'Alex': {
        age: 21,
        isMarried: true,
        scores: 89
    },
    'Nick': {
        age: 20,
        isMarried: false,
        scores: 120
    },
    'John': {
        age: 44,
        isMarried: false,
        scores: 100
    }
}
console.log(students.reduce((acc, el) => {
    //Bob        = {name: "Bob",age: 22,isMarried: true,scores: 85}
    acc[el.name] = {...el}//
    // name delete in {name: "Bob",age: 22,isMarried: true,scores: 85}
    delete  acc[el.name].name
    //'Bob':  {age: 22,isMarried: true,scores: 85}
    return acc
}, {}))

console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, []))//на 10 очков больше всем   map

console.log(students.reduce((acc, el) => {
    if (el.scores >= 100) {
        acc.push({...el})
    }
    return acc
}, []))// Nick, John    filter

const nums2 = [1, 2, 3, 4, 5, 6, 2, 5]//сколько раз встреч елем в[]
console.log(nums2.reduce((acc, el) => {
    //{'1': 1, '2': 2, '3': 1, '4': 1, '5': 2, '6': 1}
    if (acc[el]){
        acc[el] = acc[el] + 1//если елем уже встречался +1
    } else {
        acc[el] = 1//если встреч впервые
    }
    return acc
}, {}))