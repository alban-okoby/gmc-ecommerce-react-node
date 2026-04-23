# GMC Ecommerce React Node

This project is an e-commerce platform built with React and Node.js.

## Quick Start Commands
- Development Environment:
```
# Copy environment file
cp .env.example .env

# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild specific service
docker-compose up -d --build server

# Access services:
# - Frontend: http://localhost:3000
# - Backend API: http://localhost:5000
# - MongoDB Express: http://localhost:8081
# - Redis CLI: docker exec -it ecommerce-redis redis-cli -a your_redis_password
```
- Production Environment:
```
# Build and start production environment
docker-compose -f docker-compose.prod.yml up -d

# Scale backend services
docker-compose -f docker-compose.prod.yml up -d --scale server=3

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Zero-downtime deployment
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d --remove-orphans
```

## Project Structure 
```
ecommerce-mern/
├── docker-compose.yml
├── docker-compose.prod.yml
├── .env.example
├── server/
│   ├── Dockerfile
│   ├── Dockerfile.prod
│   ├── package.json
│   ├── .dockerignore
│   └── src/
│       ├── index.js
│       ├── config/
│       │   └── db.js
│       ├── models/
│       │   ├── User.js
│       │   ├── Product.js
│       │   ├── Order.js
│       │   └── Cart.js
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── product.routes.js
│       │   ├── cart.routes.js
│       │   ├── order.routes.js
│       │   └── user.routes.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── product.controller.js
│       │   ├── cart.controller.js
│       │   └── order.controller.js
│       ├── middleware/
│       │   ├── auth.middleware.js
│       │   ├── errorHandler.js
│       │   └── validation.js
│       └── utils/
│           ├── generateToken.js
│           └── emailService.js
├── client/
│   ├── Dockerfile
│   ├── Dockerfile.prod
│   ├── nginx/
│   │   └── nginx.conf
│   ├── package.json
│   └── src/
│       ├── App.js
│       ├── components/
│       │   ├── Header/
│       │   ├── Footer/
│       │   ├── ProductList/
│       │   ├── ProductCard/
│       │   ├── Cart/
│       │   ├── Checkout/
│       │   └── User/
│       ├── pages/
│       │   ├── HomePage.js
│       │   ├── ProductDetailPage.js
│       │   ├── CartPage.js
│       │   ├── CheckoutPage.js
│       │   └── ProfilePage.js
│       ├── context/
│       │   ├── AuthContext.js
│       │   └── CartContext.js
│       ├── services/
│       │   └── api.js
│       └── styles/
└── mongo-init/
    └── init.js
```