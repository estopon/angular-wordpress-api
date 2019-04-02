const nodemailer = require("nodemailer");
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
 user: "pruebasangular76@gmail.com", // Cambialo por tu email
 pass: "pru3b1s1ngul1r" // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `”${formulario.name} 👻” <${formulario.email}>`,
 to: "pruebasangular76@gmail.com", // Cambia esta parte por el destinatario
 subject: "Consulta formulario web Viajes Gala",
 html: `
 <strong>Nombre:</strong> ${formulario.name} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.message}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}