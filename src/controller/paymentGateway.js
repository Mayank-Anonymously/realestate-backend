require("dotenv").config();
const stripe = require("stripe")("");

exports.createProductAndPrice = async (req, res) => {
  const { name, amount, currency, successUrl, failedUrl } = req.body;
  try {
    // Step 1: Create Product
    const product = await stripe.products.create({
      name: name || "Default Product",
    });

    // Step 2: Create Price
    const price = await stripe.prices.create({
      unit_amount: amount, // e.g. 1000 for $10.00
      currency: currency || "usd",
      product: product.id,
    });

    // Step 3: Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl,
      cancel_url: failedUrl,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    res.status(500).json({ message: "Failed to create checkout session." });
  }
};
