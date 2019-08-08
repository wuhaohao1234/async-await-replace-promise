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

const MakeRequest = () => {
    getJson().then(data => {
        console.log(data)
        return 'done'
    }).catch(err => {
        console.log(err)
    })
}
const MakeRequest = async () => {
    try {
        console.log(await getJson())
        return 'done'
    } catch(err) {
        return err
    }
    
}
MakeRequest().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})