const castle = document.querySelector('img')

const welcome = evt => {
    alert('Welcome to my castle')
}

castle.addEventListener('click', welcome)