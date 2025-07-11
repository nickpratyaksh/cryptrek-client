## Tech stack used -

- NextJS
- TailwindCSS
- ShadCN
- ExpressJS
- MongoDB
- Mongoose

## Setup and installations steps

- Clone both server and client repos
- "npm install" in both repos
- Create .env file in both repos
- PORT, MONGODB_URL - add these in server .env file
- NEXT_PUBLIC_API_URL - add this in client server .env file
- Start server with "node server.js"
- Start frontend with "npm run dev"
- Open localhost:3000 in browser

## How cron job works

cron.schedule("0 \* \* \* \*", saveCoin);
This cron job is scheduled to run on 0th minute of every hour. Here I have just called a function which calls the api and saves the 10 coins data in MongoDB.
