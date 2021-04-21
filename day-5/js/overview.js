
export const data = 'really cool data';

export const primitives = {
    Boolean: true,
    String: 'words titles labels',
    Number: 2.2
}
// console.log(Boolean(false), String({test: 1}), Number('sj1'));

console.log(Object.keys(primitives))

export const complex = {
    array: [
        'my name array',
        1,
        2,
        false
    ],
    object: { 
        0: 'my name object',
        age: 1,
        2: 2,
        3: false
     }
};

console.log(complex.array['0']);


