# Stage 1: Build the React frontend
FROM node:22-slim AS builder

WORKDIR /app

# Copy client package files and install dependencies
COPY client/package.json client/package-lock.json* ./client/
RUN npm ci --prefix client

# Copy the rest of the client code
COPY client ./client

# Build the client
RUN npm run build --prefix client

# Stage 2: Setup the Node.js backend and serve the frontend
FROM node:22-slim
WORKDIR /app

ENV NODE_ENV=production

# Copy server package files and install production dependencies
COPY package.json package-lock.json* ./
RUN npm ci 

# Copy server-side application code
COPY server.js ./
COPY config ./config
COPY models ./models
COPY routes ./routes

# Copy built frontend assets from the builder stage
COPY --from=builder /app/client/dist ./client/dist

EXPOSE 5000

CMD ["node", "server.js"]
