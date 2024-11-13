# MERN E-commerce Website

This project is a full-stack e-commerce website built with the MERN stack: MongoDB, Express.js, React, and Node.js. The website includes functionalities like user authentication, product management, shopping cart, and order processing.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Product listing with search, filter options
- Shopping cart and checkout process
- Order management and payment integration
- Responsive design

## Tech Stack

- **Frontend**: React, Zustand, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other**: JWT for authentication , SSLCommerz for payments

## Installation

1. **Clone the repository**  
```bash
git clone https://github.com/nhmnazmul22/mern-stack-e-commerce
cd mern-stack-e-commerce
```

2. **Install dependencies**

 - Install server dependencies
 ```bash
 cd server
 npm install
 ```

- Install client dependencies
```bash
cd client
npm install
```

3. **Set up Config variables**
In the root directory, create a .env file for the backend with the following variables:

```bash
export const PORT = 5050;
export const DATABASE_URI = "";
export const JWT_KEY = "IjD5WURrpGGDWAvl3iHdjfmWQMeNFZQW4lSYIxa4NSw";
export const JWT_EXPIRED_TIME = 30 * 24 * 60 * 60;
export const EMAIL_HOST = "";
export const EMAIL_PORT = ;
export const EMAIL_USER = "";
export const EMAIL_PASS = "";
export const EMAIL_UN_AUTH = false;
export const WEB_CACHE = false;
export const MAX_JSON_FILE = "50MB";
export const URL_ENCODED = true;
export const REQUEST_TIME = 20 * 60 * 1000;
export const REQUEST_LIMIT = 2000;
export const STORE_ID = "";
export const STORE_PASSWORD = "";
export const CURRENCY = "BDT";
export const SUCCESS_URL = "";
export const FAIL_URL = "";
export const CANCEL_URL = "";
export const IPN_URL = "";
export const INIT_URL = "";
```

4. **Run the application**
 - Start the server:
```bash
cd server
npm Start
 ```

- Start the client:
```bash
cd client
npm run dev
```
4. **Open in browser**
Visit ```http://localhost:3000``` to view the website.

5. **Usage**
- User Actions: Register, login, browse products, add to cart, and checkout.

### API Endpoints ###
Click The Postman Documentation Link: ```https://documenter.getpostman.com/view/36162154/2sAY547z2L```

### Project Structure ###

```
mern-ecommerce/
├── client/                    # React frontend
│   ├── public/                # Static assets
│   └── src/                   # React components and pages
├── server/                    # Express backend
│   ├── node_module/                # Database and config files
│   ├── controllers/           # Request controllers
│   ├── models/                # Mongoose schemas/models
│   ├── routes/                # API routes
│   └── server.js              # Express app initialization
└── README.md                  # Project documentation
```
