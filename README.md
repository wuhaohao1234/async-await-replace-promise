# async-await-replace-promise
async await 替换 promise的理由

## example

```
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
         retrun 'done'
    })
}
const MakeRequest = async () => {
    console.log(await getJson())
    return 'done'
}
MakeRequest().then(res => {
    console.log(res)
})
```

### 不同之处

* 函数前面多了一个 async 关键字。await 关键字只能用在 async 定义的函数内。async 函数会隐式地返回一个 promise，该 promise 的 reosolve 值就是函数 return 的值。(示例中 reosolve 值就是字符串”done”)

* 不能在最外层代码中使用 await，因为不在 async 函数内。

## 为什么async&await比promise更好

1. 简洁

使用 Async/Await 明显节约了不少代码。我们不需要写.then，不需要写匿名函数处理 Promise 的 resolve 值，也不需要定义多余的 data 变量，还避免了嵌套代码。这些小的优点会迅速累计起来，这在之后的代码示例中会更加明显。

2. 错误处理

Async/Await 让 try/catch 可以同时处理**同步和异步**错误。

