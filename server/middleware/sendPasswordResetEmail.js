import nodemailer from "nodemailer";
// hjou okbb uyde kehv
// walterkagwima2019@gmail.com
export const sendPasswordResetEmail = (token, email, name) => {
  const html = `
    <html>
        <body>
          <h3>Dear ${name}</h3>
             <p>Please click on the link below to reset your password.</p>
             <a href="http://localhost:3000/password-reset/${token}">Click here!</a>
        </body>
    </html>`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "walterkagwima2019@gmail.com",
      pass: "hjou okbb uyde kehv",
    },
  });

  const mailOptions = {
    from: "walterkagwima2019@gmail.com",
    to: email,
    subject: "Tech Smart: Reset your password request.",
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email send to ${email}`);
      console.log(info.response);
    }
  });
};
