const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRIDAPI);


export default function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);
  
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: 'jmiller686@gmail.com',
    from: 'portfolio@mnmdevelopment.com',
    subject: `${body.subject}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data);

  res.status(200).json({ status: "Ok" });


  
}
