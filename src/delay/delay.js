const delay = (cb, ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cb())
        }, ms)
    })
}

module.exports = delay

// delay(() => 5*5, 1000).then((res) => console.log(res))