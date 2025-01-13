const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, phone, service, message } = JSON.parse(event.body);

    // E-posta gönderimi için transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-posta içeriğini oluştur
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Yeni İletişim Formu: ${service}`,
      text: `
        Ad Soyad: ${name}
        E-posta: ${email}
        Telefon: ${phone}
        Hizmet: ${service}
        Mesaj: ${message}
      `,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Hizmet:</strong> ${service}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `,
    };

    // E-postayı gönder
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mesajınız başarıyla gönderildi' }),
    };
  } catch (error) {
    console.error('E-posta gönderimi sırasında hata:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Mesaj gönderilirken bir hata oluştu' }),
    };
  }
}; 