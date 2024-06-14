// Promise Chaining

// Task to complete:
    // Sabse pehle ghar par aao
    // gate kholo aur gate lagao
    // khana pakao aur khana khao
    // incognito mode chalao
    // sojao kyuki tum thak chuke ho

let promise1 = new Promise((res, rej) => {
    return res("Sabse pehle ghar par aao")
})

let promise2 =  
    promise1.then((data) => {
        console.log(data);

        return new Promise((res, rej) => {
            return res("gate kholo aur gate lagao")
        })
    }) 

let promise3 = 
    promise2.then((data) => {
        console.log(data);

        return new Promise((res, rej) => {
            return res("khana pakao aur khana khao")
        })
    })

let promise4 = 
    promise3.then((data) => {
        console.log(data);

        return new Promise((res, rej) => {
            return res("incognito mode chalao")
        })
    })

let promise5 = 
    promise4.then((data) => {
        console.log(data);

        return new Promise((res, rej) => {
            return res("sojao kyuki tum thak chuke ho")
        })
    })

let promise6 = 
    promise5.then((data) => {
        console.log(data);
    }) 