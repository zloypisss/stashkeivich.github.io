document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement,{
        style:`
        --move-x:${(e.clientX - window.innerWidth / 2) * -0.005}deg;
        --move-y:${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
/*
 уведомления

  title - название заголовка
  text - текст сообщения
  theme - тема
  autohide - нужно ли автоматически скрыть всплывающее сообщение через interval миллисекунд
  interval - количество миллисекунд через которые необходимо скрыть сообщение
*/
document.querySelector('.add-toast').onclick = () => {
    new Toast({
        title: false,
        text: 'Скопировано в буфер обмена',
        theme: 'light',
        autohide: true,
        interval: 5000
      })
       /* Copy text into clipboard */
    navigator.clipboard.writeText
    ("usmanskomorokhov@gmail.com");
        
}
document.querySelector('#add-toast').onclick = () => {
    new Toast({
        title: false,
        text: 'Скопировано в буфер обмена',
        theme: 'light',
        autohide: true,
        interval: 5000
      })
       /* Copy text into clipboard */
    navigator.clipboard.writeText
    ("skomorokhov");
}

