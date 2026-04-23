# Multi-stage build for development
FROM node:20-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start development server with hot reload
CMD ["npm", "run", "dev"]