const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  console.log('Function başlatıldı');
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    console.log('Request body:', event.body);
    const { name, email, phone, service, message } = JSON.parse(event.body);

    // Env değişkenlerini kontrol et
    console.log('SMTP Ayarları:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'Mevcut' : 'Eksik',
      pass: process.env.SMTP_PASS ? 'Mevcut' : 'Eksik',
      contactEmail: process.env.CONTACT_EMAIL ? 'Mevcut' : 'Eksik'
    });

    // E-posta gönderimi için transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Gmail için özel service tanımı
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      debug: true,
      logger: true
    });

    // Transporter'ı test et
    console.log('SMTP bağlantısı test ediliyor...');
    await transporter.verify();
    console.log('SMTP bağlantısı başarılı');

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

    console.log('E-posta gönderiliyor...');
    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mesajınız başarıyla gönderildi', info }),
    };
  } catch (error) {
    console.error('Detaylı hata:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: 'Mesaj gönderilirken bir hata oluştu',
        error: error.message,
        code: error.code
      }),
    };
  }
}; 