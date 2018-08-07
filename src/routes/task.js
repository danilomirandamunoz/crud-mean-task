const express = require("express");

const router = express.Router();
//const db = mongojs("mean-db", ["tasks"]);

let Task = require("../models/task");


router.get("/task", (req, res) => {

    Task.find((err, tasks) => {

        if (err) {
            return res.json({
                ok: false,
                err
            })
        }

        res.json(
            tasks
        )
    });



});


router.post("/task", (req, res) => {

    let taks = req.body;
    let newTask = new Task({
        titulo: taks.titulo,
        estado: taks.estado
    })

    newTask.save((err, taskDB) => {
        if (err) {
            return res.json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            tarea: taskDB
        })
    })



});



module.exports = router;