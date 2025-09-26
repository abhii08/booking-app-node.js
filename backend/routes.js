import express from "express";
import Ticket from "./schema.js";

const router = express.Router();

router.use(express.json());

router.post("/booking", async(req,res) => {
    const {movie, slot, seats} = req.body;
    
    // Validate required fields
    if (!movie || !slot || !seats) {
        return res.status(400).json({
            data: null,
            message: "Movie, slot, and seats are required fields"
        });
    }
    
    // Validate seats object structure
    if (typeof seats !== 'object' || seats === null) {
        return res.status(400).json({
            data: null,
            message: "Seats must be a valid object"
        });
    }
    
    try {
        const myData = new Ticket({movie,slot,seats});
        await myData.save();
        res.status(200).json({data:myData, message:"Booking Successful!"});
    } catch (error) {
        console.error("Error saving booking:", error);
        res.status(500).json({
            data:null,
            message:"Something went wrong! Please try again"
        })
    }
});

router.get('/booking', async(req,res) => {
    try {
        const myData = await Ticket.find().sort({_id:-1}).limit(1)
        if(myData.length === 0){
            res.status(200).json({data:null, message:"No previous booking found"});
        }else{
            res.status(200).json({data:myData[0]})
        }
    } catch (error) {
        console.error("Error fetching booking:", error);
        res.status(500).json({
            data:null,
            message:"Something went wrong!"
        })
    }
})

export default router;