import sendgridMail from '@sendgrid/mail';

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    const { name, email, message } = await req.json();

    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDGRID_SENDER,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<strong>You have received a new message from ${name} (${email}):</strong><br><br>${message}`,
    };
  
    try {
      await sendgridMail.send(msg);
      return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ message: 'Error sending message' }), { status: 500 });
    }
}
