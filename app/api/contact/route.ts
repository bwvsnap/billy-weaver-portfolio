import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, company, service, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'info@billyweaver.co.uk',
        subject: `New contact form submission from ${name}`,
        text: `
        You have a new contact form submission:

        -----------------------------------
        Name:       ${name}
        Email:      ${email}
        Company:    ${company}
        Service:    ${service}
        -----------------------------------

        Message:
        ${message}

        -----------------------------------
        Sent from the website contact form.
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
