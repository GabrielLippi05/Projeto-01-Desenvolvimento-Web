require('dotenv').config(); // Carrega variáveis do .env

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const twilio = require('twilio');

const app = express();
const port = 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

const client = twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.post('/send-sms', (req, res) => {
    const { message, to } = req.body;

    client.messages
        .create({
            body: message,
            from: twilioNumber,
            to: to,
        })
        .then((msg) => {
            res.status(200).send({ success: true, messageSid: msg.sid });
        })
        .catch((error) => {
            res.status(500).send({ success: false, error: error.message });
        });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
