const express = require('express')
const router = express.Router()
const fs = require('fs')
const uniqid = require ('uniqid')

router.get('/api/notes', (req, res) => {
 fs.readFile('db/db.json', "utf-8", (err, data) =>{
     if(err) {
         console.log(err);
     } else {
         return res.json(JSON.parse(data));
     }
 })
})

router.post('/api/notes', ( req, res) => {
    fs.readFile('db/db.json', "utf-8", (err, data) =>{
if (err) {
    console.log(err)
} else {
    const db = JSON.parse(data)
    const newNote = req.body
    const id = "id"
    const noteId = uniqid()
    newNote[id] = noteId
    db.push(newNote)

    fs.writeFile('db/db.json', JSON.stringify(db), (err) =>{
        if(err) {
            console.log(err)
        } else {
            return res.json(db)
        }
    })
    
}

})
    

})

module.exports = router