const express = require("express");
const { createOrder, getOrderByEmail } = require("../controllers/order");

const router = express.Router();

// create order endpoint
router.post("/", createOrder);

// get orders by user email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
