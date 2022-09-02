
import {MenType} from './Destructuring'
let props: MenType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Pobedy street'
            }
        }
    }
})

test(' ', () => {
    //destructorization []
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    //   ||
    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('2')
    expect(ls2.title).toBe('2')
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'})
})

test('', () => {
   /* const age = props.age
    const lessons = props.lessons*/
    // ||
    const {age, lessons} = props
    // const {age: n, lessons: m} = props//pseudonim
    // const title = props.address.street.title
    //  ||
    const {title} = props.address.street
    //забираем пропсы, так короче запись
    const a = props.age
    const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Pobedy street')
})