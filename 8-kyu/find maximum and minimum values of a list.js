var min = function(list){
    const compareFn = (a, b) => a - b;
    let y = list.sort(compareFn);
    return y[0];
}

var max = function(list){
    const compareFn = (a, b) => b - a;
    let x = list.sort(compareFn);
    return x[0];
}
