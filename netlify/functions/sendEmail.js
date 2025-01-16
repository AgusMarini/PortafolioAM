const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { nombre, correo, mensaje } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.EMAIL_USER, // Correo en variables de entorno
      pass: process.env.EMAIL_PASS, // Contraseña en variables de entorno
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "agustina_1312@hotmail.com", // Cambia esto al correo donde llegarán los mensajes
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado correctamente" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al enviar el correo", error }),
    };
  }
};
