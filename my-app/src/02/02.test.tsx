import {CityType} from "./02_02";


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
// test.skip no read
//01. create type CityType
//02. city should
test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe('Happy street')
})
//01. add type GovernmentBuildingType2
//02. add type
test.skip('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings[0].type).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('Hospital')
    expect(city.governmentBuildings[0].budget).toBe(280000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str')
})