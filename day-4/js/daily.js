// let isRaining;
// isRaining = confirm('is it raining');

// console.log(isRaining);

// if (isRaining) {
//     console.log('go get an umbrella');
// } else {
//     console.log('no need for an umbrella')
// }

// isRaining ? console.log('it is raining') : console.log('no it is not raining');



function myFunction() {
    const howManyMealsDidYouEatToday = prompt('how many meals did you eat today');

    let calories = 0;
    switch(howManyMealsDidYouEatToday) {
        case '0':
            console.log('you should eat something');
            calories = -10;
            return;
        case '1':
            console.log('you got two more to go');
            calories = 1000;
            console.log('calories', calories)
            break;
        case '2':
            console.log('time for dinner');
            break;
        case '3':
            console.log('room left for a snack?');
            break;
        default:
            console.log('there goes my diet');
    }

    console.log(calories);
}

// myFunction();

for(let i = 0; i < 10; i++) {
    console.log('i', i);
    if (i === 2) {
        break;
    }
}

console.log('continue')


// const age = parseInt(prompt('age?'));



// if (age >= 16 && age < 18 || hasPermit) {
//     console.log('between 16 and 17');
//     const hasPermit = confirm('do you have a permit');
//     if (hasPermit) {
//         console.log('kid has ambition');
//     } else {
//         console.log('youll nee a permit to work kid')
//     }
// }

// if ( age < 16) {
//     console.log('too young to work')
// }

// if (age > 18) {
//     console.log('work eligible')
// }

const age = 16;
// if (age >= 18 || age >= 16 && confirm('hasPermit')) {
//     console.log('can work');
// } else {
//     console.log('can not work')
// }

// age >= 18 || age >= 16 && confirm('hasPermit') ? console.log('can') : console.log('cant')
