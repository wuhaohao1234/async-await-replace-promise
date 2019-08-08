const getJson = () => {
    return new Promise((resolve, reject) => {
        let dbJson = {
            name: 'promise'
        }
        try {
            resolve(dbJson)
        } catch {
            reject('err')
        }
    })
}

// const MakeRequest = () => {
//     getJson().then(data => {
//         console.log(data)
//          retrun 'done'
//     })
// }
const MakeRequest = async () => {
    console.log(await getJson())
    return 'done'
}
MakeRequest().then(res => {
    console.log(res)
})