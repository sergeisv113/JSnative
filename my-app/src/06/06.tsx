// import {HouseType} from "../02/02_02";
import React, {MouseEvent, ChangeEvent} from "react";

/*export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}` )
}*/
/*export const createMessages = (houses: Array<HouseType>) => {
    let callbackfn = (h: HouseType) => {
        return `Hello guys from ${h.address.street.title}`
    }
    // return houses.map(callbackfn)
    let newArray = houses.map(callbackfn)
    return newArray
}*/
// window.setTimeout(() => {} ,1000)
//  ||
// const callback = () => {alert('hey')}
/*export const callback = (): number => {
    alert('hey')
    return 12
}
window.setTimeout(callback ,1000)*/

export const User = () => {

    const  deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        // event.currentTarget
        //елемент на кот сработ событие
        alert(event.currentTarget.name)
    }

    // const saveUser = () => {alert('save user')}
    const onNameChanged = () => {console.log('name changed')}
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {console.log('age changed: ' + event.currentTarget.value)}
    const focusLostHandler = () => {console.log('focus lost')}

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}
        >Dimych</textarea>
        <input onChange={onAgeChanged} type="number"/>
        {/*<div tabIndex={1} onClick={deleteUser}>delete</div>*/}
        {/*tabIndex={1} попадаем при TAB*/}

        {/*<button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={saveUser}>x</button>*/}

        <button name={'delete'} onClick={deleteUser}>x</button>
        {/*<button name={'save'} onClick={deleteUser}>x</button>*/}
    </div>
}