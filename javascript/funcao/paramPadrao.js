function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c
}

console.log(soma1(0, 0, 0))

soma1 = function(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}


console.log(soma1(0, 0, 0), soma1(3, 4))

// com ECMAscript moderno, da p so fazer iso aqui, ó
soma1 = function(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1(2, 3), soma1(2, 2, 3))