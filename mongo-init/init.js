// Create application user
db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: [
    {
      role: 'readWrite',
      db: process.env.MONGO_DB_NAME
    }
  ]
});

// Initialize collections with schema validation
db = db.getSiblingDB(process.env.MONGO_DB_NAME);

// Users collection
db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email', 'passwordHash'],
      properties: {
        name: { bsonType: 'string' },
        email: { bsonType: 'string', pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
        passwordHash: { bsonType: 'string' },
        role: { enum: ['user', 'admin'] }
      }
    }
  }
});

// Products collection
db.createCollection('products', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'price', 'category'],
      properties: {
        name: { bsonType: 'string' },
        price: { bsonType: 'number', minimum: 0 },
        category: { bsonType: 'string' },
        inventory: { bsonType: 'number', minimum: 0 }
      }
    }
  }
});

// Orders collection
db.createCollection('orders', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['userId', 'products', 'totalAmount', 'status'],
      properties: {
        userId: { bsonType: 'objectId' },
        status: { enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] }
      }
    }
  }
});

// Create indexes
db.users.createIndex({ email: 1 }, { unique: true });
db.products.createIndex({ name: 'text', description: 'text' });
db.products.createIndex({ category: 1 });
db.products.createIndex({ price: 1 });
db.orders.createIndex({ userId: 1 });
db.orders.createIndex({ createdAt: 1 });