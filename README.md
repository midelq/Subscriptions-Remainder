# Subscriptions-Remainder
Subscriptions Remainder API

A project for sending subscription renewal reminders. This system sends emails to users reminding them of their upcoming subscription renewals a few days before the renewal date.

## Features

- Sends email reminders for subscription renewals at various times (7, 5, 2, 1 day before renewal).
- Uses email templates for each reminder type.
- Allows dynamic insertion of variables in each email, such as username, renewal date, price, etc.

## Technologies Used

- **Node.js** — for the backend.
- **Express** — for building the API.
- **MongoDB** — for storing user and subscription data.
- **Nodemailer** — for sending emails.
- **JWT** — for user authentication and authorization.
- **Bcrypt** — for securely storing passwords.

## Installation

1. Clone the repository:


   ```bash

   git clone https://github.com/midelq/Subscriptions-Remainder.git


   cd Subscriptions-Remainder
#npm install

##MONGO_URI=your_mongodb_connection_string
##JWT_SECRET=your_jwt_secret
##EMAIL_HOST=smtp.yourmail.com
##EMAIL_PORT=587
##EMAIL_USER=your-email@example.com
##EMAIL_PASS=your-email-password

npm start



