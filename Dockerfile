# Image from latest NodeJS based on AlpineLinux
FROM node:alpine

# Install global node dependencies
RUN npm install -g nodemon

# Copy our code (at .) into the container (at /app)
COPY . /app
WORKDIR /app

# Run our app
CMD nodemon server.js
