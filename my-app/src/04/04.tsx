const  ages = [18, 20, 22, 1, 100, 90, 14]
const predicate = (ages: number) => {
    return ages > 90
}
const oldAges = [100]// > 90

export type CorseType = {
    title: string,
    price: number
}
const  corses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
]
//<160
const cheapPredicate = (corses: CorseType) => {
    return corses.price < 160
}
const chipCourses = []