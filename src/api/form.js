const nodemailer = require("nodemailer")

export default function formHandler(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.lolipop.jp",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  })

  if (!req.body.email) {
    return res.status(422).json("Email is required")
  }

  const mailData = {
    from: req.body.email ? req.body.email : "",
    to: process.env.MAIL,
    subject: "Thanks for the inquiry!",
    html: req.body.emailBody ? `<p>${req.body.emailBody}</p>` : "Null message.",
  }

  const results = transporter
    .sendMail(mailData)
    .then(result => res.status(200).json(JSON.stringify(result)))
    .catch(error => res.status(500).json(JSON.stringify(error)))
}
