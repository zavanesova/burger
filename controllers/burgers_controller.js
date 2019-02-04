var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    })
})

//put/post requests not working for some reason
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "burger_eaten"], [req.body.burger_name, req.body,burger_eaten], function(data) {
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "burger_eaten"
    ],[
        req.body.burger_name, req.body.burger_eaten
    ], function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        burger_eaten: req.body.burger_eaten
    }, condition, function(data) {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
    // burger.updateOne({
    //     burger_eaten: req.body.burger_eaten
    // },{
    //     where: {
    //         condition
    //     }
    // }).then(function(data){
    //     if (data.changedRows == 0) {
    //         // If no rows were changed, then the ID must not exist, so 404
    //         return res.status(404).end();
    //       } else {
    //         res.status(200).end();
    //       }
    // });
});

module.exports= router;