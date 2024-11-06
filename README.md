# API Gateway

This is an Express-based API Gateway that provides a unified entry point for client requests to different services, handles security and error management, and offers monitoring endpoints. It uses **TypeScript**, **Express**, and **Jest** for testing.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

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
│   ├── app.test.ts              # Tests for app endpoints
│   └── notFound.test.ts         # Test for 404 error handling
├── .env                         # Environment variable definitions
├── jest.config.ts               # Jest configuration
└── README.md                    # Project documentation
```