async function payNow() {
  const amount = document.getElementById("amount").value;

  // Create order by calling the server endpoint
  const response = await fetch("/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount,
      currency: "INR",
      receipt: "receipt#1",
      notes: {}
    })
  });

  console.log(process.env.RAZORPAY_ID_KEY);

  const order = await response.json();
  // Open Razorpay Checkout
  const options = {
    key: "rzp_test_OYPZgmjDM3s7ni", // Replace with your Razorpay key_id
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    order_id: "order_IluGWxBm9U8zJ8", // This is the order_id created in the backend
    callback_url: "http://localhost:3000/payment-success", // Your success URL
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999"
    },
    theme: {
      color: "#F37254"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
