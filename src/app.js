const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.static('assets'))


//ROUTES
app.get('/inicio', (req, res)=>{
    res.sendFile(path.join(__dirname, '../assets', 'login.html'))
})

app.get('/registro', (req, res)=>{
    res.sendFile(path.join(__dirname, '../assets', 'register.html'))
})

app.get('/forgot-password', (req, res)=>{
    res.sendFile(path.join(__dirname, '../assets', 'forgot-password.html'))
})

app.get('/nosotros', (req,res)=>{
    fs.readFile('./assets/contador.txt', (error, data)=>{
        if(error){
            console.error("No se encontro el archivo")
        }
        const Data = data.toString()
        const arr = Data.split(":")
        let visitas = Number(arr[1])
        fs.writeFile('./assets/contador.txt', 'visitas:'+`${visitas+1}`,(err)=>{err})
        res.send('<h3>Visitas: '+ `${visitas+1}`+'</h3>')
    })
})

app.listen(3000, ()=>console.log('Puerto 3000'))