const btnSave = document.querySelector('#btn-save')
btnSave.onclick = btn => {
    btn.preventDefault()

    const form = btn.target.parentNode
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')

    if (name === '') {
        return alertForm()
    }
    if (email === '') {
        return alertForm()
    } else {
        addUser(name, email)
    }
}

const alertForm = () => {
    const input = document.querySelector('form')

    const box = document.createElement('div')
    box.classList.add('l-form__alert--err')
    box.textContent = 'Atenção! Não pode conter campos em branco.'

    input.appendChild(box)
}

function addUser(name, email) {

    const dataUser = {
        name,
        email
    }

    if (localStorage.getItem('users') === null) {

        localStorage.setItem('users', JSON.stringify([dataUser]))

    } else {

        localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users')), dataUser]))
    }

    showUser(dataUser)

    document.location.reload(true)
}

function showUser(user) {
    const tbUsers = document.getElementById('tbUsers')
    const linha = tbUsers.insertRow()

    linha.insertCell(0).innerHTML = user.name
    linha.insertCell(1).innerHTML = user.email
}

function getUsers() {
    const users = JSON.parse(localStorage.getItem(localStorage.key(0)))

    users.forEach(user => showUser(user))
}

getUsers()

function delUsers() {
    localStorage.clear()
    document.location.reload(true)
}