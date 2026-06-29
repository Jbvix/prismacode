# prismacode

This repository now includes the smallest supported app shape needed for Prisma App deploys: a minimal [Hono](https://hono.dev/) entrypoint at `src/index.js`.

## Prisma App deploy

The original command:

```sh
bunx @prisma/cli@preview app deploy --app cmqzqln090wnp15e1wjctckky
```

does not work against this repository by itself because Prisma cannot auto-detect a supported framework here unless you provide one explicitly. Use the documented deploy flow below instead.

### 1. Install dependencies

```sh
npm install
```

### 2. Sign in to Prisma

```sh
npm run prisma:login
```

### 3. Deploy the app

```sh
npm run prisma:deploy -- --app cmqzqln090wnp15e1wjctckky
```

If you prefer Bun, this is the equivalent command:

```sh
bunx @prisma/cli@preview app deploy --app cmqzqln090wnp15e1wjctckky --framework hono --entry src/index.js
```