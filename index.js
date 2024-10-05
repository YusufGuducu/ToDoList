let FormDOM = document.querySelector("#userForm")
FormDOM.addEventListener('submit',formSubmit)
const alertDOM = document.querySelector('#alert')


const alertFunction = (title, message,className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formSubmit(event) {
    event.preventDefault()
    const ACTIVITY = document.querySelector("#activity")
    const TIME = document.querySelector("#time")
    console.log(TIME.value)
    console.log(ACTIVITY.value)
    if (ACTIVITY.value && TIME.value){
        addItem(ACTIVITY.value, TIME.value)
        ACTIVITY.value=""
        TIME.value="00:00"
    } else {
        alertDOM.innerHTML = alertFunction(
            "Dikkat",
            "Eksik Bilgi Girdiniz !")
    }
    
}

let activitiesDOM = document.querySelector('#activities')

const addItem = (activity,time) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${time} - ${activity} <button class="btn btn-primary me-md-2" onclick="this.parentElement.style.display='none';">Sil</button>`
    liDOM.classList.add ('fw-bold','p-3', 'border', 'rounded','justify-content-between')
    activitiesDOM.append(liDOM)
}

