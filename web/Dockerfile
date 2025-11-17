FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
ARG AIRTABLE_BASE_ID
ARG AIRTABLE_PAT
ENV AIRTABLE_BASE_ID=$AIRTABLE_BASE_ID
ENV AIRTABLE_PAT=$AIRTABLE_PAT
RUN npm run build

FROM node:20-alpine
ENV NODE_ENV=production
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
ARG AIRTABLE_BASE_ID
ARG AIRTABLE_PAT
ENV AIRTABLE_BASE_ID=$AIRTABLE_BASE_ID
ENV AIRTABLE_PAT=$AIRTABLE_PAT
CMD ["npm", "run", "start"]