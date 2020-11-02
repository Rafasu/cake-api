const express = require("express");
const router = express.Router();
const Cake = require("../models/Cake");

//Get a list of cakes
router.get("/", async (req, res) =>{
    try{
        const cakes = await Cake.find();
        res.status(200).json(cakes);
    }catch(err){
        res.status(500).json({message: err.message});
    }

});

//Register a new cake
router.post("/", async (req, res) => {
    const cake = new Cake({
        name: req.body.name, 
        price: req.body.price, 
        flavors: req.body.flavors
    });
    try{
        const savedCake = await cake.save();
        res.status(201).json(savedCake);

    }catch(err){
        res.status(400).json({message: err.message});
    }
});

//Get a particular cake
router.get("/:cakeId", async (req, res) =>{
    try{
        const cake = await Cake.findById(req.params.cakeId);        
        res.status(200).json(cake);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//Update a cake
router.patch("/:cakeId", async (req, res) =>{
    try{
        const updatedCake = await Cake.updateOne({_id: req.params.cakeId}, 
            {$set:{name:req.body.name, price: req.body.price, flavors: req.body.flavors}});
        res.status(200).json(updatedCake);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

//Delete a cake
router.delete("/:cakeId", async (req, res) =>{
    try{
        const removedCake = await Cake.remove({_id: req.params.postId});
        res.json(removedCake);
        res.status(200).json(updatedCake);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});


module.exports = router;