import { Request, Response } from 'express'
import mailer from '../services/mailer'

const sendEmail = async (req: Request, res: Response) => {
    try {
        const email = req.body.email as string
        const subject = req.body.subject as string
        const text = req.body.text as string

            const info = await mailer.sendMail({
                from: `Angelo <${process.env.NODEMAILER_USER}>`,
                to: email,
                subject,
                text,
                html: `<p>${text}</p>`
        })

        console.log(info)

        res.status(200).send("Email enviado com sucesso!")
    } catch(err) {
        res.status(400).send({ message: err.message})
    }
    
}

export default sendEmail
