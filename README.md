# Flappy Bird Telegram Mini App - Backend

Backend part of Flappy Bird game for Telegram Mini Apps.

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run start:dev

# Build for production
npm run build
```

## Environment Variables

Create `.env` file:
```env
DB_TYPE=sqlite
DB_NAME=flappybird
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
```

## Features
- Score tracking
- Leaderboard system
- SQLite/MySQL database support
- REST API endpoints
