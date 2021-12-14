const router = require("express").Router();
const hotspot = require("../model/hotspot");

//CREAMOS UN HOTSPOT
router.post("/", async(req, res) => {
    const newhotspot = new hotspot(req.body);
    try {
        const savedhotspot = await newhotspot.save();
        res.status(200).json(savedhotspot);
    } catch (err) {
        res.status(500).json(err);
    }
});

//RECIBIMOS TODOS LOS HOTSPOTS
router.get("/", async(req, res) => {
    try {
        const hotspots = await hotspot.find();
        res.status(200).json(hotspots);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;