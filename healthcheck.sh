#!/bin/bash

# Check all services
check_service() {
    local service=$1
    local url=$2
    
    if curl -f -s -o /dev/null "$url"; then
        echo "✅ $service is healthy"
    else
        echo "❌ $service is unhealthy"
        return 1
    fi
}

check_service "Backend API" "http://localhost:5000/api/health"
check_service "Frontend" "http://localhost:3000"
check_service "MongoDB Express" "http://localhost:8081"

# Check container status
docker-compose ps