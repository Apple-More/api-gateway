# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies including devDependencies for building
RUN npm install

# Copy the source code
COPY . .

# Build the TypeScript application
RUN npm run build

# Stage 2: Create a lightweight image for production
FROM node:20-alpine AS release

# Set the working directory
WORKDIR /app

# Copy the required files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Install only production dependencies
RUN npm install --omit=dev

# Accept build arguments for PORT and DATABASE_URL
ARG PORT
ARG CART_SERVICE_URL
ARG EMAIL_SERVICE_URL
ARG ORDER_SERVICE_URL
ARG PAYMENT_SERVICE_URL
ARG PRODUCT_SERVICE_URL
ARG USER_SERVICE_URL
ARG JWT_SECRET
ARG JWT_REFRESH_SECRET

# Set environment variables
ENV PORT=${PORT}
ENV CART_SERVICE_URL=${CART_SERVICE_URL}
ENV EMAIL_SERVICE_URL=${EMAIL_SERVICE_URL}
ENV ORDER_SERVICE_URL=${ORDER_SERVICE_URL}
ENV PAYMENT_SERVICE_URL=${PAYMENT_SERVICE_URL}
ENV PRODUCT_SERVICE_URL=${PRODUCT_SERVICE_URL}
ENV USER_SERVICE_URL=${USER_SERVICE_URL}
ENV JWT_SECRET=${JWT_SECRET}
ENV JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}

# Expose the application port
EXPOSE ${PORT}

# Start the application
CMD ["node", "dist/server.js"]
