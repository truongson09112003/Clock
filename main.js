// const age = prompt('Vui lòng xác nhận độ tuổi')
const API = 'http://worldtimeapi.org/api/timezone/Asia/Bangkok'
const Render = document.querySelector('.render')
const RenderDay = document.querySelector('.renderday')

setInterval(() => {
    fetch(API)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            RenderDay.innerHTML = response.datetime.slice(0, 10)
            Render.innerHTML = response.datetime.slice(11, 19)
        })
}, 1000)


