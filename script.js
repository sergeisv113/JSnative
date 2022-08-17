//number, string, boolean, undefined, null, BigInt, Infinity, Symbol
//object, array, function
/*
console.log(typeof 4) //number
console.log(typeof NaN) //number
console.log(typeof BigInt) //function
console.log(Number.isNaN(NaN))
console.log(Array.isArray()) //true||false
console.log(()=> {}) //'func'*/
/*
let user = {} //#345 //new Object()
//||
let user = new Object()
*/

let user = {
    name: 'Alex',
    age: 23
}
let newUser = user
newUser.name = 'Bob'//copy link

//user => copy user => change copy user =.use copy of user with changes


//copy user = copy in obj
/*
let copyUser = {} // #346
copyUser.name = user.name
copyUser.age = user.age
console.log(copyUser === user)//false
*/

//copy user = spred operator++++++
/*
const copyUser = {...user}
console.log(copyUser === user)//false*/

//object.assign(), JSON=>stringify
/*const users = [
    {name: 'Alex'},// add obj {name: 'Katy'}
    {name: 'Bob'},// if {name: 'Heliga'} => copyBob=>change name=>Heliga
    {name: 'Anna'},
    {name: 'MAry'},
]*/
// const copyUsers = [...users, {name: 'Katy'}]// copy link
/*
copyUsers = [
    {name: 'Alex'},
    {name: 'Bob'},
    {name: 'Anna'},
    {name: 'MAry'},
    {name: 'Katy'}
]*/

/*const copyUsers = users.map(user => {
    if (user.name === "Bob"){
        return {...user, name: 'Heliga'}
    }
    return user
})*/
/*let copyUsers = [
    {name: 'Alex', },
    {name: 'Bob', friends: ['Bob', 'Bob']},
    {name: 'Anna', friends: ['Anna','Anna']},
    {name: 'MAry', friends: ['Bob', 'Bob']},
    {name: 'Katy', friends: ['Anna','Anna']}
]*/
// const copyUsers = users.map(user => user)//poverhnosn copy
// const copyUsers = [...users]

/*const copyUsers = users.map(user => {//glubok copy
    return {...user, friends: [...user.friends]}
})*/
//add Bob new friends
/*const addFr = users.map(user => user.name === 'Bob' ? {...user, friends: [...user.friends, 'Stepan']} : user)*/

function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

mergeArrays([1,2,3,4], [5,6,7,8])