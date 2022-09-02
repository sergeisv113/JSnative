import {
    createGreetingMessage,
    createMessages,
    getStreetsTitlesOfGovermentsBuildings,
    getStreetsTitlesOfHouses,
    ManType
} from './05'
import {CityType} from "../02/02_02";
import {createMessage} from "../03/03";

let  people: Array<ManType> = []
beforeEach(() => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Dima Sydor', age: 18},
    ]
})
test('should get array of greeting messages', () => {
    // const  message = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome IT-Incubator`)
    const message = createGreetingMessage(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello Andrey. Welcome IT-Incubator')
    expect(message[1]).toBe('Hello Alex. Welcome IT-Incubator')
    expect(message[2]).toBe('Hello Dima. Welcome IT-Incubator')
})

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            "id": 1, buildedAt: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },
            {id: 2,buildedAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {id: 3,buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },],
        governmentBuildings: [{type: 'Hospital', budget: 280000, staffCount: 200,
            address: {
                number: 1,
                street: {
                    title: 'Central Str'
                }
            }},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    number: 2,
                    street: {
                        title: 'South Str'
                    }
                }
            }],
        citizensNumber: 1000000
    }
})

test('list of streets titles of goverments buildings', () => {
    let streets = getStreetsTitlesOfGovermentsBuildings(city.governmentBuildings)
    expect(streets.length).toBe(2)
    expect(streets[0]).toBe('Central Str')
    expect(streets[1]).toBe('South Str')
})
test('list of streets titles', () => {
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})
test('create greeting for streets', () => {
    let message = createMessages(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello guys from White street')
    expect(message[1]).toBe('Hello guys from Happy street')
    expect(message[2]).toBe('Hello guys from Happy street')
})