import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, interes, proyecto } = await request.json();

    const { error } = await resend.emails.send({
      from: "Kiro Klima Web <onboarding@resend.dev>",
      to: "hola@kiroklima.es",
      subject: `Solicitud de presupuesto - ${interes}`,
      replyTo: email,
      html: `
        <h2>Nueva solicitud de presupuesto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio de interés:</strong> ${interes}</p>
        <h3>Proyecto:</h3>
        <p>${proyecto}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
