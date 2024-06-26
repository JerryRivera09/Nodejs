const os = require('os')
console.log(os.userInfo())
console.log(os.uptime()) //tiempo desde tener pc prendido   
console.log(os.platform()) //plataforma win, linux, etc
console.log(os.totalmem()) //memoria total
console.log(os.freemem())// memoria disponible


//otro tipo de mensajes por consola
console.table({
    os: os.platform(),
    version: os.release(),
    totalmemory: os.totalmem(),
    tiempo: os.uptime()
})