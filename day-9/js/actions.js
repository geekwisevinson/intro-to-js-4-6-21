import {allUsers, elements} from './data.js';

export function actionRegister(event) {
        event.preventDefault();
        const username = this.username.value;
        const password = this.password.value;

        if (!this.username.value) {
            return alert('you need a username')
        }

        if (!this.password.value) {
           return alert('you need a password')
        }


        if (this.password.value !== this.confirm.value) {
            return alert('pasword does not match');
        }

        console.log('registed', )

        registerUser({username, password})
        this.reset();
}

export function actionLogin(event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;
    console.log('you just logged in', this);
    const index = allUsers.find((thing) => thing.username === username );
    console.log(index);

    elements.banner.innerHTML = `You are logged in as ${username}`

    console.log(elements.usersList.children)

    elements.usersList.querySelectorAll('li').forEach(li => {
        if (li.innerText === username) {
            li.classList.add('logged-in')
        }
    });
}

function registerUser(user) {
    allUsers.push(user);
    console.log(allUsers, user, elements.usersList );
    const li = document.createElement('li');
    elements.usersList.append(li);
    li.innerHTML = user.username;

}


export default {
    actionRegister,
    actionLogin,
    registerUser,
}
