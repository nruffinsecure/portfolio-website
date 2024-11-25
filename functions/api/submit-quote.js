import { sendQuoteRequest } from '../../lib/email.js';

export async function POST({ request }) {
  try {
    const formData = await request.json();
    const result = await sendQuoteRequest(formData);
    
    if (result.success) {
      return new Response(JSON.stringify({ message: 'Quote request received' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
