# Stage 1: Build the React client
FROM node:22-slim AS client-builder
WORKDIR /usr/src/app

# Copy client package files and install dependencies
COPY client/package.json client/package-lock.json* ./client/
RUN npm ci --prefix client

# Copy the rest of the client source code and build
COPY client/ ./client/
# 'npm run build' should be the script in your client/package.json that builds the static assets (e.g., using Vite or CRA)
RUN npm run build --prefix client

# Stage 2: Setup the Node.js server
FROM node:22-slim
WORKDIR /usr/src/app

ENV NODE_ENV=production

# Copy server package files and install production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy server source code
# This copies server.js and any other root-level server files/folders you might have (e.g., models, routes, config)
COPY server.js .
COPY models/ ./models
COPY routes/ ./routes
COPY config/ ./config

# Copy built client from the client-builder stage
COPY --from=client-builder /usr/src/app/client/dist ./client/dist

# Expose the port your server listens on.
EXPOSE 5000

# Command to run the server.
CMD ["npm", "start"]
