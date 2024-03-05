#SETUP

### Create an .env.development file in the root of the project with the following content
```env
SERVER_PORT=8080
MONGOURI={YOUR_MONGO_URI}
LOGGING_LEVEL=tiny
NEXT_PUBLIC_API_URL=http://localhost:8080
FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_API_KEY={YOUR_API_KEY}
```

### Add symlink env to the frontend
```bash
pnpm run symlink
```

### Start the server for both the frontend and backend
```bash
pnpm run dev
```