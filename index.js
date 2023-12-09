const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (if needed)
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Send email (use your email configuration)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // your Gmail email address
            pass: 'your-password' // your Gmail password or App Password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com', // sender address
        to: 'recipient-email@example.com', // recipient address
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent:', info.response);
        res.send('Form submitted successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
