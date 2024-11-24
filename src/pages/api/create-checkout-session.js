import Stripe from 'stripe';

export async function POST({ request }) {
  const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

  try {
    const data = await request.json();
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${data.serviceType} Website Package`,
          },
          unit_amount: data.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${import.meta.env.PUBLIC_SITE_URL}/thank-you`,
      cancel_url: `${import.meta.env.PUBLIC_SITE_URL}/services`,
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
