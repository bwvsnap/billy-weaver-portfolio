import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, company, service, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'rorythomas511@gmail.com',
        subject: `New contact form submission from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Company: ${company}
            Service: ${service}
            Message: ${message}
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
