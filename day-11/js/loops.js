for (let i = 100; i < 10; i++) {
    console.log('i',i);
}
let a = 100;
while(a < 10) {
    console.log('a', a);
    a++;
}

let b = 100;
do {
    console.log('b', b);
    b++;
} while(b < 10)

const array = [0,1,2,3,'four',5,6,7,8,9];
array.forEach( (item, index) => {
    console.log('c', item, index);
});


for (let item of array) {
    console.log('d', item);
}


let user = {
    name: 'v',
    test: 1,
}


for(let key in user) {
    console.log(user[key)
}