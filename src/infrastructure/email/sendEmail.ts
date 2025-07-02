export async function sendEmail({
  name,
  phone,
  email,
  subject,
  message,
  //vehicleBrand = '',
  //vehicleModel = '',
  //vehicleYear = '',
  //contactPreference = '',
}: {
  name: string;
  phone: string;
  email: string;
  subject?: string;
  message: string;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  contactPreference?: string;
}) {
  const apiKey = process.env.BREVO_API_KEY;
  const emailDestination = process.env.EMAIL_DESTINATION;

  console.log(apiKey, emailDestination);
  

  if (!apiKey || !emailDestination) {
    throw new Error('Missing BREVO_API_KEY or EMAIL_DESTINATION');
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: 'Aspectus Auto Mecânica', email: 'contatoaspectus1@gmail.com' },
      to: [{ email: emailDestination }],
      subject: subject || 'Novo Contato do Site',
      htmlContent: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Erro ao enviar email:', errorData);
    throw new Error('Erro ao enviar email');
  }

  return res.json();
}
