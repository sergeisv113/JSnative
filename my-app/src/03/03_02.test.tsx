import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {create} from "domain";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{buildedAt: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        },
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },],
        governmentBuildings: [{type: 'Hospital', budget: 300000, staffCount: 200,
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

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(400000)
})
test('Budget should be changed for FIRE_STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})
/*
test('Houses should be destroyed', () => {
    demolisshHousesOnTheStreet(city, 'Happy street')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})*/
test('House should be repared', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})
test('Staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('House should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})
test('Greeting message should be correct for city', () => {
/*
    const message = createMessage(city)
    expect(message).toBe('Hello New York. I want you be happy. All 1000000 man.')
*/
    expect(createMessage(city)).toBe('Hello New York. I want you be happy. All 1000000 man.')
})
