# API Gateway

This is an Express-based API Gateway that provides a unified entry point for client requests to different services, handles security and error management, and offers monitoring endpoints. It uses **TypeScript**, **Express**, and **Jest** for testing.

## Table of Contents

- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [System Requirements](#system-requirements)
- [Run Locally](#run-locally)
- [Documentations](#documentations)

---

## Project Structure

```plaintext
.
├── src
│   ├── app.ts                   # Main Express app setup
│   ├── server.ts                # Starts the server
│   ├── routes                   # API route definitions
│   ├── middleware               # Custom middleware (e.g., error handlers, logging)
│   ├── utils                    # Utility functions
│   └── errors                   # Custom error classes (e.g., ApiError)
├── tests                        # Jest test files
├── .env                         # Environment variable definitions
├── jest.config.ts               # Jest configuration
└── README.md                    # Project documentation
```

## Environment Variables

Before starting the project, create a `.env` file in the root directory and add the following keys and values.


| Key              |  Value          | Required | Notes                                        |
|:-----------------|:---------------:|---------:|---------------------------------------------:|
| JWT_SECRET   | applemore  | yes      |             |  
| JWT_REFRESH_SECRET   | applemore  | yes      |         |  
| JWT_EXPIRES_IN   | 1d  | yes      |             |  
| JWT_REFRESH_EXPIRES_IN   | 3m  | yes      |     |  
| DATABASE_URL   | connection string  | yes      |             |    
| BFF_SERVICE_URL   | 8080  | yes      |  localhost:8080           |  
| USER_SERVICE_URL   | 8081  | yes      |  localhost:8081       |    
| ORDER_SERVICE_URL   | 8082  | yes      |  localhost:8082     |    
| PRODUCT_SERVICE_URL   | 8083  | yes      |  localhost:8083   |    
| CART_SERVICE_URL   | 8084  | yes      |  localhost:8084      |    
| PAYMENT_SERVICE_URL   | 8085  | yes      |  localhost:8085   |    
| NOTIFICATION_SERVICE_URL   | 8087  | yes  | localhost:8087   |    


## System Requirements

- **Node.js**: 20.x or higher
- **npm** or **yarn**
- **Next.js**: 13.x or higher


## Run Locally

Clone the project

```bash
  git clone https://github.com/Apple-More/api-gateway.git
```

Go to the project directory

```bash
  cd api-gateway
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Start the tests

```bash
  npm test
```


## Documentations

- [Prisma](https://www.prisma.io/docs/orm)
- [JEST](https://jestjs.io/docs/getting-started)