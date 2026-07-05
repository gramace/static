import { NextResponse } from "next/server";
import { render } from "react-email";
import { WaitlistConfirmationEmail } from "../emails/waitlistConfirmation";

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const emailContent = await render(<WaitlistConfirmationEmail />);
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: { email: process.env.EMAIL, name: "ExaMeow" },
        to: [{ email }],
        subject: "Waitlist Confirmation",
        htmlContent: emailContent,
      }),
    });

    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({ message: "Added to waitlist" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}