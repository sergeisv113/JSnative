//Handler(обработчик), listener(слушатель), subscriber(подписчик)
//function
//Событие => вызывает обработчик(слушатель, подписчик)=> function()
// Объект event(ev, e) => сведения о произошедшем событии = function(e)
//()=> alert('c')литерал

const onClickHandler1 = (xx) => {
    xx.stopPropagation()
    alert('hey')}

// const onClickHandler2 = (e) => {console.log(e.currentTarget.id)}
const onClickHandler2 = (e) => {
    e.stopPropagation()//stop всплытие смс
    console.log(e)}
const onClickHandler3 = () => {
    alert('yo')}


const sm = document.getElementById('small')//ссылка в доме
/*
sm.onclick = onClickHandler1//перезатерся
sm.onclick = onClickHandler2
//     ||
sm.onclick = () => {alert('hey')}
sm.onclick = null//delete обработчик*/
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const listener = () => alert('too')//предварит ссылка что бы удалить

/*
sm.addEventListener('click', onClickHandler1)
sm.addEventListener('click', onClickHandler2)

sm.addEventListener('click', listener)// 2 обработчика событий и обрабат. на стадии погружения
// sm.removeEventListener('click', onClickHandler1)//2
sm.removeEventListener('click', listener)//1
*/

sm.addEventListener('click', onClickHandler2)
md.addEventListener('click', onClickHandler1)
bg.addEventListener('click', onClickHandler3)

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    e.preventDefault()//отмена действия по умолчанию
    alert('Ha ha ha')
})