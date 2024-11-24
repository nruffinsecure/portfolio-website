import Stripe from 'stripe';

export async function post() {
  const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Website Development Service',
          },
          unit_amount: 50000, // $500.00
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${import.meta.env.PUBLIC_SITE_URL}/thank-you`,
    cancel_url: `${import.meta.env.PUBLIC_SITE_URL}/services`,
  });

  return new Response(JSON.stringify({ id: session.id }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
