# Env & Branching — Books API

Node.js + Express + MongoDB app with per-environment configuration.

## Environments
Config is loaded dynamically from `.env.<NODE_ENV>` (staging, preprod, prod).
Copy the examples first: `cp .env.staging.example .env.staging` (same for preprod/prod).

## Run
npm install
npm run start:staging   # port 3001
npm run start:preprod   # port 3002
npm run start:prod      # port 3000

## API
POST /books · GET /books · GET /books/:id · PUT /books/:id · DELETE /books/:id

## Git flow
main ← release/* ← develop ← feature/*  (Conventional Commits enforced via husky + commitlint)
