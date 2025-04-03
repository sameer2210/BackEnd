require("dotenv").config();
const Razorpay = require("razorpay");
const Payment = require("./payment");
const express = require("express");
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.get("/", async (req, res) => {
  res.render("index", { title: "Express" });
});

app.post("/create/orderId", async (req, res) => {
  const options = {
    amount: 5000 * 100, // amount in smallest currency unit
    currency: "INR"
  };
  try {
    const order = await razorpay.orders.create(options);
    res.send(order);

    const newPayment = await Payment.create({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: "pending"
    });
  } catch (error) {
    res.status(500).send("Error creating order");
  }
});

app.post("/api/payment/verify", async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, signature } = req.body;
  const secret = process.env.RAZORPAY_KEY_SECRET;

  try {
    const {
      validatePaymentVerification
    } = require("./node_modules/razorpay/dist/utils/razorpay-utils.js");

    const result = validatePaymentVerification(
      { order_id: razorpayOrderId, payment_id: razorpayPaymentId },
      signature,
      secret
    );
    if (result) {
      const payment = await Payment.findOne({ orderId: razorpayOrderId });
      payment.paymentId = razorpayPaymentId;
      payment.signature = signature;
      payment.status = "completed";
      await payment.save();
      res.json({ status: "success" });
    } else {
      res.status(400).send("Invalid signature");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error verifying payment");
  }
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
