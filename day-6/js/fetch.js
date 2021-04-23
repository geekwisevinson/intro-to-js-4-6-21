console.log('test')

export function getUsers() {
    fetch('https://cat-fact.herokuapp.com/facts', {
        method: 'GET'
    })
    .then( function (data) {
        console.log(data);
        return data.json(); // parse data
    } ).then( function (data) {

        console.log(data);
    });
}

getUsers();

export function signUp( user) {
    fetch('https://28448f85f99b.ngrok.io/new-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: user})
    } )
    .then( function (data) {
        console.log(data);
        return data.json(); // parse data
    } ).then( function (data) {
    
        console.log(data);
    });
}
