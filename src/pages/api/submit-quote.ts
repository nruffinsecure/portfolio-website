import type { APIRoute } from "astro";
import { Resend } from "resend";

export const POST: APIRoute = async ({ request, redirect, locals }) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const business = formData.get("business")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const tools = formData.get("tools")?.toString() || "Not specified";
    const painPoint = formData.get("pain_point")?.toString() || "";

    const runtime = (locals as any).runtime;
    const apiKey = runtime?.env?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Clearflow Data <onboarding@resend.dev>",
      to: "nruffinsecure@gmail.com",
      subject: `New Consultation Request: ${name} (${business})`,
      replyTo: email,
      text: `New Consultation Request

Name: ${name}
Business: ${business}
Email: ${email}

Tools Currently Using:
${tools}

Biggest Data Pain Point:
${painPoint}`,
    });

    return redirect("/thank-you", 303);
  } catch (error) {
    console.error("Form submission error:", error);
    return redirect("/contact?error=true", 303);
  }
};
