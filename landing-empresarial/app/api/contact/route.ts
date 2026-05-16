import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type, name, email, message, extra } = body;

    let serviceTitle = "Nueva Consulta Comercial";
    let serviceSubtitle = "Solicitud recibida desde el sitio web";
    let serviceColor = "#0f172a";

    // SEGÚN SERVICIO
    switch (type) {
      case "Persona":
        serviceTitle = "Consulta | Liderazgo Personal";
        serviceSubtitle = "Interés en liderazgo personal";
        serviceColor = "#7c2d12";
        break;

      case "Empresa":
        serviceTitle = "Consulta | Estrategia Empresarial";
        serviceSubtitle =
          "Interés en procesos de cambio organizacional y cultura interna";
        serviceColor = "#1e3a8a";
        break;

      case "Deportes":
        serviceTitle = "Consulta | Liderazgo Deportivo";
        serviceSubtitle = "Interés en desarrollo deportivo de alto rendimiento";
        serviceColor = "#065f46";
        break;
    }

    await resend.emails.send({
      from: "Pablo Martin Gonzalez - Consultoría <pablo@pablomgonzalez.com>",
      to: "pablo@pablomgonzalez.com",
      subject: `${serviceTitle} | ${name}`,
      html: `
  <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:24px;">
    
    <div style="max-width:520px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
      
      <!-- Header -->
      <div style="background:${serviceColor};padding:16px;">
        <h2 style="color:#ffffff;margin:0;font-size:20px;">
          ${serviceTitle}
        </h2>
        <p style="color:#e5e7eb;margin:4px 0 0;font-size:13px;">
          ${serviceSubtitle}
        </p>
      </div>

      <!-- Content -->
      <div style="padding:20px;color:#111827;font-size:14px;line-height:1.5;">
        
        <p><strong>Nombre:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Servicio:</strong> ${type || "-"}</p>
        <p><strong>Detalle:</strong> ${extra ?? "-"}</p>

        <div style="margin-top:16px;padding:12px;background:#f9fafb;border-radius:6px;">
          <p style="margin:0;"><strong>Mensaje:</strong></p>
          <p style="margin:8px 0 0;">${message || "-"}</p>
        </div>

      </div>

      <!-- Footer -->
      <div style="padding:12px 20px;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280;">
        Lead generado desde el sitio web
      </div>

    </div>
  </div>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}
