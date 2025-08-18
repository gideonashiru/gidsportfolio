"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "gideonashiru@gmail.com",
      subject: `New message from ${formData.name}`,
      replyTo: formData.email, 
      html: `<p><strong>Message:</strong> ${formData.message}</p>
         <p><strong>From:</strong> ${formData.name} (${formData.email})</p>`,
    });

    console.log(formData);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
