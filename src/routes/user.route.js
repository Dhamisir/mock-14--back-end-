const express = require("express");
const { userAddController, userEditController } = require("../controller/user.controller");
const userModel = require("../model/user.model");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let data = await userModel.find();
        res.status(200).send({
            msg: data
        })
    } catch (error) {
        res.status(401).send({ msg: error.message })
    }
})

router.post("/", async (req, res) => {
    const { name, level, score } = req.body;
    let data = await userAddController(name, level, score);
    res.status(data.status).send(data.payload)
})

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;
    let data = await userEditController(id, score);
    res.status(data.status).send(data.payload)
})


module.exports = router;