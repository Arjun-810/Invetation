// import type {NextApiRequest, NextApiResponse} from 'next'
import nodemailer from 'nodemailer'

const fromEmail = 'arjunkaushik039@gmail.com'
const toEmail = 'arjunkaushik039@gmail.com'
const password = 'joasfebrdlrgacqm'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: fromEmail,
    pass: password,
  },
})

export default async function handler(req, res)  {
  console.log("body = ",req.body)
  const {name, email, contact_no, adults,child2_10, childAbv10} = req.body

  const mailOptions = {
    from: fromEmail,
    to: email,
    subject: `Diwali Ticket Confirmation`,
    html: `
    <div>Dear ${name},<br>

    Confirmation of your booking for Diwali Celibration on 4th NOV 2023 AT 7:00 PM.<br/>
    Details: ${adults} adult, ${child2_10} children (2-10), ${childAbv10} children (above 10). See you there!<br/>
    
    Best,<br/>
    Priya Sharma
		`,
  }

  const mailOptions2 = {
    from: fromEmail,
    to: fromEmail,
    subject: `${name} Diwali Ticket Confirmation`,
    html: `
    <div>Dear Priya Sharma,<br>

    System generated mail for recent ticket reservation:<br/>

    Name : ${name} <br/>
    email: ${email}<br/>
    contact no: ${contact_no}<br/> 

    Reservation Details:<br/>

    Adult Tickets: ${adults}<br/>
    Child Tickets (2-10): ${child2_10}<br/>
    Child Tickets (above 10): ${childAbv10}<br/>
    Thankyou
    `,
  }

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error = ",error)
        res.status(405).end()
        resolve('')
      }
      console.log('Mail Sent', info)
      res.status(200).end()
      resolve('')
    })

    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log("error = ",error)
        res.status(405).end()
        resolve('')
      }
      console.log('Mail Sent', info)
      res.status(200).end()
      resolve('')
    })
  })
}
