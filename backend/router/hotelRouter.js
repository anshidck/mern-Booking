const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Room = require('../models/roomModel');
const Hotel = require('../models/hotelModel');
const router = express.Router();

router.post('/', expressAsyncHandler(async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
}));

router.put('/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
}));

router.delete('/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
}));

router.get('/countByCity', expressAsyncHandler(async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}));

router.get('/countByType', expressAsyncHandler(async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
}));

router.get('/', expressAsyncHandler(async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
          ...others,
          cheapestPrice: { $gt: min || 1, $lt: max || 999 },
        });
        res.status(200).json(hotels);
      } catch (err) {
        next(err);
    }
}));

router.get('/limit', expressAsyncHandler(async (req, res, next) => {
    try {
        const hotels = await Hotel.find().limit(4);
        res.status(200).json(hotels);
      } catch (err) {
        next(err);
    }
}));

router.get('/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
}));

router.get('/room/:id', expressAsyncHandler(async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}));

module.exports = router;