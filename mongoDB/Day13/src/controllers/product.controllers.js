const express = require("express");
const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY
});

module.exports.productGet = (req, res, next) => {
  try {
    res.render("index", { title: "Express" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.productPost = (req, res, next) => {
  var options = {
    amount: req.body.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function (err, order) {
    // console.log(order);
    res.send(order);
  });
};

module.exports.sam = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, signature } = req.body;
  const secret = process.env.RAZORPAY_SECRET_KEY;

  try {
    const {
      validatePaymentVerification
    } = require("../../node_modules/razorpay/dist/utils/razorpay-utils.js");

    const result = validatePaymentVerification(
      { order_id: razorpayOrderId, payment_id: razorpayPaymentId },
      signature,
      secret
    );

    console.log(result, "hello");
    // if (result) {
    //   const payment = await Payment.findOne({ orderId: razorpayOrderId });
    //   payment.paymentId = razorpayPaymentId;
    //   payment.signature = signature;
    //   payment.status = 'completed';
    //   await payment.save();
    //   res.json({ status: 'success' });
    // } else {
    //   res.status(400).send('Invalid signature');
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error verifying payment");
  }
};
