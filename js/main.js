function addUser() {
    if (localStorage.score) {
        localStorage.score = Number(localStorage.score) + 1
    } else {
        localStorage.score = 1
    }

    const inputName = document.getElementById('name').value
    const inputEmail = document.getElementById('email').value

    const user = JSON.stringify({
        Nome: inputName,
        Email: inputEmail,
    })


    localStorage.setItem('user_' + localStorage.score, user)

}