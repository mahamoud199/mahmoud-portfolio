import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();
    
    console.log(`Processing contact form submission from: ${name} (${email})`);

    // Send notification email to site owner
    const ownerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["mahmoudjobran155@gmail.com"],
        subject: `New Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              Sent from your portfolio website contact form
            </p>
          </div>
        `,
      }),
    });

    if (!ownerEmailRes.ok) {
      const error = await ownerEmailRes.text();
      console.error("Failed to send owner email:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    console.log("Owner notification email sent successfully");

    // Send confirmation email to the sender
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Mahmoud Portfolio <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for your message!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">Thank you for reaching out, ${name}!</h2>
            <p>I have received your message and will get back to you as soon as possible.</p>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151;">Your message:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p>Best regards,<br><strong>Mahmoud</strong></p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #6b7280; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      console.error("Failed to send confirmation email:", await confirmationRes.text());
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
