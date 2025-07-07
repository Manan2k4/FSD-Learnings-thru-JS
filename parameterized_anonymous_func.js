var anon = function(a, b) {
    return a + b;
}

function sum() {
    var result;
    result = anon(1, 2);
    console.log("Sum: " + result);
}
sum()