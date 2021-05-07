let a = [1,2,3,4,5,6];
let b = [1,3,6,9];

// Intersection (same in 2 arrays).
function getIntersection(array1, array2) {
    return [
        ...new Set(
            array1.filter(x => array2.includes(x))
            )
        ];
}

// Difference (differrent in 2 arrays)
function getDifference(array1, array2) {
    return [
        ...new Set(
            [ 
                ...array1.filter(x => !array2.includes(x)),
                ...array2.filter(x => !array1.includes(x))
            ]
        )
    ]
}

// Difference (differrent in 2 arrays)
function getUnion(array1, array2) {
    return [
        ...new Set(
            [ 
                ...array1,
                ...array2
            ]
        )
    ]
}

console.log(getIntersection(a, b));
console.log(getDifference(a, b));
console.log(getUnion(a,b))