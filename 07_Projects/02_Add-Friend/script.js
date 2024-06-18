let isStatus = document.querySelector('h5') 

let btn = document.querySelector('#add')

let flag = 0

btn.addEventListener('click', () => {
    if (flag === 0) {
        isStatus.textContent = "Friends"
        isStatus.style.color = "green"
        btn.textContent = "Remove Friend"
        flag = 1
    } else {
        isStatus.textContent = "Stranger"
        isStatus.style.color = "red"
        btn.textContent = "Add Friend"
        flag = 0
    }
}) 