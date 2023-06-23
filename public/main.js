const castle = document.querySelector('img')
const criticalBtn = document.querySelector('#critical')
const warningBtn = document.querySelector('#warning')

const welcome = evt => {
    alert('Welcome to my castle')
}

castle.addEventListener('click', welcome)

const critical = evt => {
    alert ('critical')
}

criticalBtn.addEventListener('click', critical)


const warning = evt => {
    alert('warning')
}

warningBtn.addEventListener('click', warning)