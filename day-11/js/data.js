// Data Structure

// Primitive Types

var variableName = 0; // Numbers
var variableName = 1;

let v = 'a'; // Strings
v = 'b';

const v2 = false; // Boolean

{ // scope
    const v2 = 1;
    console.log('v2', v2);
}


// Compound Structures
let user = { // scope from an object
    v2: 'a different scope',
    i: 0,
    string: '',
    favorites: [],
    bestFriend: {

    }
};

let users = [user, 0, '', true, [], {}] // List

console.log(variableName, v, user.v2);
