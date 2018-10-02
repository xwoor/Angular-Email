const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'marioosorio714@gmail.com',
            pass: '91032512039'
        }
    });

        const mailOptions = {
            from: `"${formulario.name} Mensaje "  <${formulario.email}>`,
            to: "marioosorio714@gmail.com",
        subject: formulario.asunto,
        html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}
        `
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
            console.log(err)
            else
            console.log(info);
            });
}