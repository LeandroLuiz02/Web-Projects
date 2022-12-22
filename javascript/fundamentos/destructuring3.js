function rand({max = 1000, min = 0}) {
    const res = Math.random() * (max - min) + min
    return Math.floor(res)
}

console.log(rand({max: 50}))