function test(value, value2){

    console.log(this.score);
    

    return value * value2 * this.score;

}


let object1 = {
    name: 'object1',
    score: 2,
    testA: test,
}

let object2 = {
    name: 'object2',
    score: 10,
    testA: test,
}

const myNumber = test(2, 2);
console.log(myNumber)

function getValue() {

}
console.log(object1.testA(2,3));
console.log(object2.testA(2,3));

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = i;
    document.body.appendChild(li);
    li.addEventListener('click', function() {
        console.log(this.innerHTML)
        this.remove();
    })
}