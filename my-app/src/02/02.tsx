const  student = {
    // 'my name': 'Sergey',
    id: 1,
    name: 'Sergey',
    age: 39,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'React'},
    ]
}
console.log(student.age)
console.log(student.isActive)
// console.log(student["my name"])
console.log(student.name)
console.log(student.address.city.countryTitle)
console.log(student.technologies[2].title)//'React'