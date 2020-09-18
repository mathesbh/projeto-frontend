function addUser() {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

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