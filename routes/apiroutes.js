const express = require('express')
const router = express.Router()
const fs = require('fs')
const uniqid = require ('uniqid')
const delNote = require('../db/db.json')

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




app.delete("/api/notes/:id", function(req, res){
    let id = req.params.id.toString();
    console.log(id);

    for (i=0; i < delNote.length; i++){
       
        if (delNote[i].id == id){
            res.send(delNote[i]);

            delNote.splice(i,1);
        }
    }
})



module.exports = router