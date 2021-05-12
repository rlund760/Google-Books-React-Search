var router = require("express").Router()
var db = require("../models")

router.get("/api/allbooks",function(req,res){
    db.findAll({})
    .then((books) => {
        console.log("Get Route",books);
        res.json(books)
    })
})
router.post("/api/newbook",function(req,res){
    db.create(req.body)
    .then((books) => {
        console.log("Post Route",books);
        res.json(books)
    })
})
router.delete("/api/book/:id",function(req,res){
    db.findByIdAndRemove(req.params.id)
    .then((books) => {
        console.log("Delete Route",books);
        res.json(books)
    })
})
module.exports = router