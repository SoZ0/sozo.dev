# Stage 1: Build the app
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Setup the Nginx server
FROM node:18-alpine AS production-stage

RUN mkdir /app

# Copy the build artifacts from the build stage
COPY --from=build-stage /app/build /app/build
COPY --from=build-stage /app/package.json /app/

WORKDIR /app

RUN yarn install --production && \
    yarn cache clean
# Expose port 80
EXPOSE 3000

# Start server
CMD ["node", "build/index.js"]