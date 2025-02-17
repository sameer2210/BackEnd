const express = require("express")
const cors = require("cors")
const fs = require('fs')

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

app.post('/create', (req, res) => {

    const { fileName, fileData } = req.body
    const filePath = "./uploads/" + fileName


    fs.writeFile(filePath, fileData, (err) => {
        if (err) {
            console.log(err)
            res.send("file not created")
        }
        else {
            res.send("file created")
        }
    })

})


app.get('/read/:fileName', (req, res) => {

    const fileName = req.params.fileName
    const filePath = "./uploads/" + fileName

    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log(err)
            res.send("file not readable")
        }
        else {
            res.send(data)
        }

    })

})


app.patch('/update/:fileName', (req, res) => {

    const fileName = req.params.fileName
    const filePath = "./uploads/" + fileName

    const { fileData } = req.body

    fs.writeFile(filePath, fileData, (err) => {
        if (err) {
            console.log(err)
            res.send("file not updated")
        }
        else {
            res.send("file updated  ")
        }
    })
})


app.delete('/delete/:fileName', (req, res) => {

    const fileName = req.params.fileName
    const filePath = "./uploads/" + fileName

    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err)
            res.send("error while deleting")
        }
        else {
            res.send("file deleted")
        }
    })


})

app.get('/get-all', (req, res) => {
    fs.readdir("./uploads", (err, files) => {
        if (err) {
            console.log(err)
            res.send("error while reading Directory")
        }
        else {
            res.send(files)
        }
    })
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})