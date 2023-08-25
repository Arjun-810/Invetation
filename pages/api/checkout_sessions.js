import Stripe from "stripe";

const stripe = new Stripe("sk_test_51Niz44SGHVtRwH6GhZGkAsz6VIy9Z1mIATko4ttmBoEtbaBjXGZweVSHNPyuYJn4IPmD4q95ht8gg9HeL2E69UIe00Ix2yHsDG");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: {
                name: "Sample Product",
              },
              unit_amount: 5000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:3000//success`,
        cancel_url: `http://localhost:3000//`,
      });

      res.status(200).json({ sessionId: session.id });

    } catch (err) {
      res.status(500).json({ error: "Error creating checkout session" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}