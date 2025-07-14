function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
        if (n1 >= 0 && n2 >= 0) {
            resolve(n1 + n2)
        }
        else 
            reject('Not_Positive_Number_Passed')
        })
        return p;
}

add_positivenos_async(10, 20)
    .then(successHandler)
    .catch(errorHandler)

add_positivenos_async(-10, -20)
    .then(successHandler)
    .catch(errorHandler)

function errorHandler(err) {
    console.log('Handling error ', err)
}
function successHandler(result) {
    console.log('Handling success ', result)
}

console.log('end')