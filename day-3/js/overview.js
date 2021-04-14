// Primitive DataTypes
let score = 0;
const appName = "My App";
let playing = true;

// Complex / Compound / Grouping
const players = [];
const player = {
    inventory : [],
};

// functions / actions
function createTitle(titleText) {
    const h1 = document.createElement('h1'); // creates element
    document.body.appendChild(h1); // tells the browser where to place the elemnt
    h1.innerHTML = titleText; // tells h1 what text to show

    const li = document.createElement('li');
    h1.appendChild(li);
    li.innerHTML = titleText;

};
try {
    createTitle(appNames)
} catch(e) {
    console.log(e);
}



// loops
for (let i = 0; i <= 10; i++ ) {

    console.log(i);
    // what should happen / logic
    if ( i < 5) {
        // createTitle(i);
    }

    if (i === '5') {
        createTitle(i);
    }

    if (i > 5) {
        createTitle(i);
    }
   
    
}


