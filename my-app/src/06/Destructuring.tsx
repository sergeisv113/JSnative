import React, {useState} from "react";

export type LessonsType = {title: string, name?: string}
export type MenType = {
    name: string,
    age: number,
    lessons: Array<LessonsType>//lessons: Array<title: string>
    address: {
        street: {
            title: string
        }
    }
}
export type PropsType = {
    title: string
    man: MenType
    food: Array<string>
    car: {model: string}
}
function useDimychState(m: string) {
    return [m, function (){}]
}
function useDimychState2(m: string) {
    return {message: m, setMessage: function (){}}
}


export const ManComponent: React.FC<PropsType> = (props) => {
// export const ManComponent: React.FC<PropsType> = (title, man, ...props) => {

    const [message, setMessage] = useDimychState('Hello')
    // const {message, setMessage} = useDimychState2('Hello')

    const {title, man} = props
    // const {title, man, ...restProps} = props
    const {name} = props.man

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
            {props.car.model}
            {man.name}
        </div>
    </div>
}


