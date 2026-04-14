FROM oven/bun:1 AS deps
COPY package.json bun.lock /app/
WORKDIR /app
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS prod-deps
COPY package.json bun.lock /app/
WORKDIR /app
RUN bun install --frozen-lockfile --production

FROM oven/bun:1 AS build
COPY . /app/
COPY --from=deps /app/node_modules /app/node_modules
WORKDIR /app
RUN bun run build

FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app/
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY main.ts /app/
COPY server /app/server
CMD ["npm", "run", "start"]
