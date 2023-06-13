import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;
  //validation

  const user = process.env.EMAIL;

  const data = {
    name, email, message
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: 'hu666mam@gmail.com',
      replyTo: email,
      subject: `Contact from submission from ${name}`,
      html: `
        <div>
          <p><strong>Name: </strong>${name}</p>
          <p><strong>Email: </strong>${email}</p>
          <p><strong>Message: </strong>${message}</p>
          </div>`
    });
    console.log('Message sent: %s', mail.messageId)

    return res.status(200).json({ message: 'Email sent successfully' });
    
  } catch (error) {
    console.info(error);
    res.status(500).json({ message: 'Could not send email' });
  }

  return res.status(200).json({ message: 'contact: sucess' });
}