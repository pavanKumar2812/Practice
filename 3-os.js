// built-in modules
// os
// path
// fs
// http

const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMEM: os.totalmem(),
    freeMEM: os.freemem()
}
console.log(currentOS)