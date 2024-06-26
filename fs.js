const fs = require ('fs')

// const firs = fs.readFileSync('./date/first.txt','utf-8') //utf-8 convertir a string 
// const second = fs.readFileSync('./date/second.txt')
// console.log(firs)
// console.log(second.toString())

// fs.writeFileSync('./date/third.txt', 'Este es un tercer archivo') //writefilesync crear nuevo archivo

// const tittle = 'este contenido se ha incluido'
// fs.writeFileSync('./date/fourth.txt',tittle, {
//     flag: 'a'
// })

fs.readFile('./date/first.txt', (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data.toString())

    fs.readFile('./date/second.txt', (error, data) => {
        if(error){
            console.log(error)
        }
        console.log(data.toString())

        fs.writeFile('./date/newfile.txt', 'archivo creado desde fs', (error, data) =>{
            console.log(error)
            console.log(data)
        })

        fs.writeFile('./date/newfile2.txt', 'archivo creado desde fs2', (error, data) =>{
            console.log(error)
            console.log(data)
        })
    })
})