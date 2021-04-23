// callback pattern
function apiCall(callback) {
    setTimeout(function() {
        console.log('three seconds later');

        callback([1, 2, 3]);
    }, 3000 + random());
    console.log('right now');
    
    function random() {
        return Math.random() * 10000;
    }
}



apiCall(function(data) {
 console.log('i got this data', data);
//  getProfiles(data);
});

const myPromise = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('three seconds later');

        resolve([1, 2, 3]);
    }, 3000 + random());
    console.log('right now');
    
    function random() {
        return Math.random() * 10000;
    }
}); 


myPromise.then( function(data) {
    console.log(data);
   return data[0];
}).then(function(data) {
    console.log(data);
});
