import {GovernmentBuildings, HouseType} from "../02/02_02";

export type ManType = {
    name: string
    age: number
}

const  people: Array<ManType> = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dima Sydor', age: 18},
]
const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}
//надо получить
// const devs = [
//     {stack: ['css', 'html', 'js', 'tdd', 'react'],
//         firstName: 'Andrey', lastname: 'Ivanov'
//     },
//     {stack: ['css', 'html', 'js', 'tdd', 'react'],
//         firstName: 'Alex', lastname: 'Petrov'
//     },
//     {stack: ['css', 'html', 'js', 'tdd', 'react'],
//         firstName: 'Dima', lastname: 'Sydor'
//     }
// ]

// const devs2 = [
//     dimychTransformator(people[0]),
//     dimychTransformator(people[1]),
//     dimychTransformator(people[2]),
// ]

// const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))
const  message = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome IT-Incubator`)
 export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome IT-Incubator`)
 }

 export const getStreetsTitlesOfGovermentsBuildings = (buildings: Array<GovernmentBuildings>) => {
    return buildings.map(b => b.address.street.title)
 }
 export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
 }
 export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}` )
 }

 const names = ['Serg', 'Anna', 'Peter', 'Ivan']
const liElem = names.map(n => <li>{n}</li>)

/*<ul>
    {liEl}
</ul>  */
const  users = [{name: 'Serg'}, {name: 'Anna'}, {name:'Ivan'}]
const  liUs = users.map((u, index) => <li key={index}>{u.name}</li>)
