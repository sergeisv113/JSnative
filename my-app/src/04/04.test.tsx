import {CorseType} from "./04";

test('should take old then 90', () => {
    const  ages = [18, 20, 22, 1, 100, 90, 14]
    const predicate = (ages: number) => {
        return ages > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test('should take chipper 160', () => {
    const  corses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ]

    const chipCourses = corses.filter((corses: CorseType) => corses.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('css')
    expect(chipCourses[1].title).toBe('react')
})
test('get only completed tasks', () => {
    const  tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]
    // const completedTasks  = tasks.filter(tasks => tasks.isDone)
    const completedTasks = tasks.filter(function (task) {
        return task.isDone === true
    })
    //task.isDone === false  = !task.isDone
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})